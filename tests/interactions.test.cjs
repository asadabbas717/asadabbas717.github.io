'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const base = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(base, 'exhibition.js'), 'utf8');
const bootstrap = fs.readFileSync(path.join(base, 'index.html'), 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];

// A small DOM/event fake executes the actual script. It does not establish browser layout.
function setup({ stored = null, blocked = false, light = true, hash = '' } = {}) {
  const elements = new Map();
  function element(id) {
    const listeners = new Map();
    const classes = new Set();
    const node = {
      dataset: {}, attrs: {}, hidden: false, tabIndex: 0,
      addEventListener(type, listener) { listeners.set(type, listener); },
      emit(type, data = {}) { listeners.get(type)?.({ preventDefault() {}, ...data }); },
      setAttribute(name, value) { this.attrs[name] = value; },
      getAttribute(name) { return this.attrs[name]; },
      focus() { focused = this; },
      scrollIntoView() { this.scrolled = true; },
      getBoundingClientRect() { return { left: 0, top: 0, width: 100, height: 100 }; },
      style: { values: {}, setProperty(name, value) { this.values[name] = value; } },
      classList: {
        add(name) { classes.add(name); },
        remove(name) { classes.delete(name); },
        contains(name) { return classes.has(name); },
        toggle(name) { if (classes.has(name)) { classes.delete(name); return false; } classes.add(name); return true; }
      }
    };
    elements.set(id, node);
    return node;
  }
  let focused;
  const root = element('root');
  ['theme', 'themeText', 'menu', 'navigation', 'work', 'about', 'sculpture', 'meta'].forEach(element);
  const navLink = element('navLink');
  elements.get('navigation').querySelectorAll = () => [navLink];
  const tabs = ['qashoryx', 'phishguard', 'pynivo', 'vendiqo', 'fixloom'].map(name => {
    const tab = element('tab-' + name);
    tab.dataset.project = name;
    tab.attrs['aria-controls'] = 'panel-' + name;
    element('panel-' + name);
    return tab;
  });
  const document = element('document');
  document.documentElement = root;
  document.getElementById = id => elements.get(id);
  document.querySelector = () => elements.get('meta');
  document.querySelectorAll = () => tabs;
  const scheme = element('scheme'); scheme.matches = light;
  const motion = element('motion'); motion.matches = false;
  const window = element('window');
  const location = { hash };
  const context = vm.createContext({ document, location,
    matchMedia: query => query.includes('reduced-motion') ? motion : scheme,
    addEventListener: window.addEventListener.bind(window),
    localStorage: {
      getItem() { if (blocked) throw new Error('Storage unavailable'); return stored; },
      setItem(key, value) { if (blocked) throw new Error('Storage unavailable'); stored = value; }
    }
  });
  vm.runInContext(bootstrap, context);
  vm.runInContext(source, context);
  return { root, tabs, elements, document, scheme, motion, location, window, focused: () => focused };
}

test('theme defaults, valid preference and corrupt preference recovery', () => {
  assert.equal(setup().root.dataset.theme, 'light');
  assert.equal(setup({ stored: 'dark' }).root.dataset.theme, 'dark');
  assert.equal(setup({ stored: 'corrupt' }).root.dataset.theme, 'light');
  assert.equal(setup({ blocked: true, light: false }).root.dataset.theme, 'dark');
});
test('explicit choice survives system changes even when storage is blocked', () => {
  const app = setup({ blocked: true });
  app.elements.get('theme').emit('click');
  app.scheme.emit('change', { matches: true });
  assert.equal(app.root.dataset.theme, 'dark');
  assert.equal(app.elements.get('theme').attrs['aria-label'], 'Switch to light mode');
  assert.equal(app.elements.get('meta').content, '#090a0d');
  assert.ok(app.root.classList.contains('enhanced'));
});
test('system changes apply when the visitor has no explicit choice', () => {
  const app = setup();
  app.scheme.emit('change', { matches: false });
  assert.equal(app.root.dataset.theme, 'dark');
  const explicit = setup({ stored: 'dark' });
  explicit.scheme.emit('change', { matches: true });
  assert.equal(explicit.root.dataset.theme, 'dark');
});
test('tab clicks and keyboard wrap preserve one selected focusable panel', () => {
  const app = setup();
  function selected(index) {
    app.tabs.forEach((tab, i) => {
      assert.equal(tab.attrs['aria-selected'], String(i === index));
      assert.equal(tab.tabIndex, i === index ? 0 : -1);
      assert.equal(app.elements.get(tab.attrs['aria-controls']).hidden, i !== index);
    });
  }
  app.tabs.forEach((tab, i) => { tab.emit('click'); selected(i); });
  app.tabs[4].emit('keydown', { key: 'ArrowRight' }); selected(0);
  app.tabs[0].emit('keydown', { key: 'ArrowLeft' }); selected(4);
  app.tabs[4].emit('keydown', { key: 'Home' }); selected(0);
  app.tabs[0].emit('keydown', { key: 'End' }); selected(4);
  assert.equal(app.focused(), app.tabs[4]);
});
test('menu closes on Escape with focus restoration and on link activation', () => {
  const app = setup(); const menu = app.elements.get('menu');
  menu.emit('click'); assert.equal(menu.attrs['aria-expanded'], 'true');
  app.document.emit('keydown', { key: 'Escape' });
  assert.equal(menu.attrs['aria-expanded'], 'false'); assert.equal(app.focused(), menu);
  menu.emit('click'); app.elements.get('navLink').emit('click');
  assert.equal(menu.attrs['aria-expanded'], 'false');
});
test('project hashes, legacy aliases and unknown hashes are safe', () => {
  const app = setup({ hash: '#pynivo' });
  assert.equal(app.tabs[2].attrs['aria-selected'], 'true');
  for (const hash of ['#products', '#atlas', '#principles', '#unknown', '#<img>']) {
    app.location.hash = hash; app.window.emit('hashchange');
  }
  assert.ok(app.elements.get('work').scrolled); assert.ok(app.elements.get('about').scrolled);
  assert.equal(app.tabs[2].attrs['aria-selected'], 'true');
});
test('pointer effect excludes touch and reduced motion and resets immediately', () => {
  const app = setup(); const art = app.elements.get('sculpture');
  art.emit('pointermove', { pointerType: 'touch', clientX: 100, clientY: 100 });
  assert.equal(art.style.values['--px'], undefined);
  art.emit('pointermove', { pointerType: 'mouse', clientX: 100, clientY: 100 });
  assert.equal(art.style.values['--px'], '11px');
  app.motion.matches = true; app.motion.emit('change');
  assert.equal(art.style.values['--px'], '0px');
  art.emit('pointermove', { pointerType: 'mouse', clientX: 100, clientY: 100 });
  assert.equal(art.style.values['--px'], '0px');
});
