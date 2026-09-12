(() => {
  'use strict';
  const root = document.documentElement;
  const theme = document.getElementById('theme');
  const preference = matchMedia('(prefers-color-scheme: light)');
  function syncTheme() {
    const dark = root.dataset.theme === 'dark';
    theme.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    document.getElementById('themeText').textContent = dark ? 'Light' : 'Dark';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#090a0d' : '#f8f9fc';
  }
  theme.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('exhibition-theme', root.dataset.theme); } catch (_) {}
    syncTheme();
  });
  preference.addEventListener('change', e => {
    try { if (localStorage.getItem('exhibition-theme')) return; } catch (_) {}
    root.dataset.theme = e.matches ? 'light' : 'dark';
    syncTheme();
  });
  syncTheme();
  const menu = document.getElementById('menu');
  const navigation = document.getElementById('navigation');
  function closeMenu() {
    navigation.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
  }
  menu.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); }
  });
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function selectProject(tab, focus = false) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectProject(tab));
    tab.addEventListener('keydown', e => {
      let next;
      if (e.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { e.preventDefault(); selectProject(tabs[next], true); }
    });
  });
  function resolveProjectHash() {
    const name = location.hash.slice(1);
    const tab = tabs.find(item => item.dataset.project === name);
    if (tab) { selectProject(tab); document.getElementById('work').scrollIntoView(); }
    if (name === 'products' || name === 'atlas') document.getElementById('work').scrollIntoView();
    if (name === 'principles') document.getElementById('about').scrollIntoView();
  }
  addEventListener('hashchange', resolveProjectHash);
  if (location.hash) resolveProjectHash();
  const sculpture = document.getElementById('sculpture');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  sculpture.addEventListener('pointermove', e => {
    if (motion.matches || e.pointerType !== 'mouse') return;
    const rect = sculpture.getBoundingClientRect();
    sculpture.style.setProperty('--px', `${((e.clientX - rect.left) / rect.width - .5) * 22}px`);
    sculpture.style.setProperty('--py', `${((e.clientY - rect.top) / rect.height - .5) * 16}px`);
  });
  sculpture.addEventListener('pointerleave', () => {
    sculpture.style.setProperty('--px', '0px');
    sculpture.style.setProperty('--py', '0px');
  });
})();
