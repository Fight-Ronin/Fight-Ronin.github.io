(() => {
  const sidebar = document.querySelector('.section-nav');
  const toggle = document.querySelector('.section-menu-toggle');
  const dismissers = document.querySelectorAll('[data-section-nav-dismiss]');
  const links = [...document.querySelectorAll('[data-section-link]')];
  const desktop = window.matchMedia('(min-width: 1181px)');
  if (!sidebar || !toggle) return;

  let isOpen = false;
  let previousFocus = null;

  const syncMode = () => {
    if (desktop.matches) {
      isOpen = false;
      document.body.classList.remove('is-section-nav-open');
      sidebar.inert = false;
      sidebar.removeAttribute('aria-hidden');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open page index');
      return;
    }

    sidebar.inert = !isOpen;
    sidebar.setAttribute('aria-hidden', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close page index' : 'Open page index');
  };

  const openSidebar = () => {
    if (desktop.matches) return;
    previousFocus = document.activeElement;
    isOpen = true;
    document.body.classList.add('is-section-nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    syncMode();
    sidebar.querySelector('a')?.focus();
  };

  const closeSidebar = () => {
    if (desktop.matches || !isOpen) return;
    isOpen = false;
    document.body.classList.remove('is-section-nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    syncMode();
    previousFocus?.focus({ preventScroll: true });
  };

  const updateCurrentSection = () => {
    if (!links.length) return;
    const marker = window.scrollY + window.innerHeight * 0.34;
    let current = links[0];
    let currentTop = -Infinity;

    for (const link of links) {
      const section = document.querySelector(link.hash);
      if (!section || section.offsetTop > marker) continue;

      const sectionTop = section.offsetTop;
      if (sectionTop > currentTop || (sectionTop === currentTop && link.hash === window.location.hash)) {
        current = link;
        currentTop = sectionTop;
      }
    }

    for (const link of links) {
      if (link === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };

  let scrollFrame = 0;
  const requestSectionUpdate = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      updateCurrentSection();
      scrollFrame = 0;
    });
  };

  toggle.addEventListener('click', () => (isOpen ? closeSidebar() : openSidebar()));
  dismissers.forEach(element => element.addEventListener('click', closeSidebar));
  links.forEach(link => link.addEventListener('click', closeSidebar));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeSidebar();
  });
  window.addEventListener('scroll', requestSectionUpdate, { passive: true });
  window.addEventListener('resize', requestSectionUpdate);
  window.addEventListener('hashchange', requestSectionUpdate);
  desktop.addEventListener('change', syncMode);

  syncMode();
  updateCurrentSection();
})();
