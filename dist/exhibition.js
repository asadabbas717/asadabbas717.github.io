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

  const hero = document.getElementById('top');
  const signalStrip = document.createElement('div');
  signalStrip.className = 'availability-strip';
  signalStrip.setAttribute('aria-label', 'Availability and focus');
  signalStrip.innerHTML = `
    <span><b>AVAILABLE FOR</b> SOFTWARE ENGINEERING ROLES</span>
    <span><b>FOCUS</b> BACKEND + PYTHON</span>
    <span><b>STRENGTH</b> DESKTOP + DEVELOPER TOOLS</span>
    <span><b>ALSO</b> SYSTEM MODERNIZATION</span>`;
  hero.insertAdjacentElement('afterend', signalStrip);

  const contact = document.getElementById('contact');
  const contactTop = contact.querySelector('.section-top');
  const pathGrid = document.createElement('div');
  pathGrid.className = 'conversion-grid';
  pathGrid.innerHTML = `
    <article class="conversion-card recruiter-card">
      <span class="conversion-label">FOR HIRING TEAMS</span>
      <h3>Need an engineer who can build <em>and</em> improve real systems?</h3>
      <p>I’m open to Software Engineer, Backend/Python, Desktop Application, developer-tooling, and product-engineering opportunities in Pakistan.</p>
      <div class="conversion-proof"><span>Qashoryx</span><span>PhishGuard</span><span>PyNivo</span><span>Vendiqo</span><span>Fixloom</span></div>
      <div class="conversion-actions">
        <a href="https://www.linkedin.com/in/asadabbas717" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="mailto:asadabbasbusiness@gmail.com">Email ↗</a>
        <a href="https://github.com/asadabbas717" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </article>
    <article class="conversion-card business-card">
      <span class="conversion-label">FOR BUSINESSES</span>
      <h3>Have operational software to build—or an existing system that needs serious modernization?</h3>
      <p>I can discuss desktop business software, Python/Django backends, workflow automation, developer tooling, reliability hardening, and modernization work grounded in tests and release evidence.</p>
      <div class="conversion-proof"><span>Business workflows</span><span>Backend modernization</span><span>Developer tools</span><span>Recovery</span><span>Delivery</span></div>
      <div class="conversion-actions">
        <a href="mailto:asadabbasbusiness@gmail.com">Start a conversation ↗</a>
        <a href="tel:+923000473399">Call ↗</a>
      </div>
    </article>`;
  contactTop.insertAdjacentElement('afterend', pathGrid);

  const contactTitle = contact.querySelector('.contact-title');
  contactTitle.href = 'mailto:asadabbasbusiness@gmail.com';
  contactTitle.removeAttribute('target');
  contactTitle.removeAttribute('rel');

  const contactBottom = contact.querySelector('.contact-bottom');
  contactBottom.innerHTML = `
    <p>Open to Software Engineer, Backend/Python, Desktop/Developer Tools<br>and related product-engineering opportunities.</p>
    <div class="contact-directory" aria-label="Contact details">
      <a href="mailto:asadabbasbusiness@gmail.com"><span>Email</span>asadabbasbusiness@gmail.com</a>
      <a href="tel:+923000473399"><span>Phone</span>+92 300 0473399</a>
      <a href="https://www.linkedin.com/in/asadabbas717" target="_blank" rel="noreferrer"><span>LinkedIn</span>/in/asadabbas717 ↗</a>
      <a href="https://github.com/asadabbas717" target="_blank" rel="noreferrer"><span>GitHub</span>@asadabbas717 ↗</a>
      <span class="contact-location"><span>Location</span>Pakistan</span>
    </div>`;

  const dock = document.createElement('aside');
  dock.className = 'contact-dock';
  dock.setAttribute('aria-label', 'Quick contact');
  dock.innerHTML = `
    <a href="mailto:asadabbasbusiness@gmail.com" aria-label="Email Asad Abbas">EMAIL</a>
    <a href="https://www.linkedin.com/in/asadabbas717" target="_blank" rel="noreferrer" aria-label="Asad Abbas on LinkedIn">IN</a>`;
  document.body.appendChild(dock);

  const footer = document.querySelector('footer');
  const footerMiddle = [...footer.children].find(node => node.tagName === 'SPAN');
  if (footerMiddle) footerMiddle.textContent = 'PRODUCT / BACKEND / DESKTOP / DEV TOOLS / WEB';

  try {
    const schemaNode = document.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(schemaNode.textContent);
    schema.sameAs = ['https://github.com/asadabbas717', 'https://www.linkedin.com/in/asadabbas717'];
    schema.email = 'mailto:asadabbasbusiness@gmail.com';
    schema.telephone = '+923000473399';
    schemaNode.textContent = JSON.stringify(schema);
  } catch (_) {}
})();
