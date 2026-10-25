(() => {
  'use strict';
  const pages = [...document.querySelectorAll('.page')];
  const validPages = new Set(pages.map(page => page.id.replace('page-', '')));
  const menu = document.getElementById('main-menu');
  const menuToggle = document.getElementById('nav-menu-toggle');
  let observer;
  function closeMenu() {
    menu?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
  function showMapPlaceholder(mount) {
    if (mount.children.length) return;
    const placeholder = document.createElement('div');
    placeholder.className = 'map-load-status';
    const message = document.createElement('p');
    message.textContent = 'Explore our U.S. warehouse locations in the interactive map.';
    const link = document.createElement('a');
    link.href = '/en/warehouse-map.html';
    link.textContent = 'Open the standalone map';
    placeholder.append(message, link);
    mount.append(placeholder);
  }
  function mountMap(mount) {
    if (mount.querySelector('iframe') || !mount.closest('.page.active')) return;
    const iframe = document.createElement('iframe');
    iframe.src = mount.dataset.mapSrc;
    iframe.title = 'Interactive U.S. warehouse network map';
    iframe.loading = 'lazy';
    iframe.allow = 'fullscreen';
    iframe.allowFullscreen = true;
    const status = document.createElement('div');
    status.className = 'map-load-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    const message = document.createElement('p');
    message.textContent = 'Loading the interactive warehouse map…';
    const directLink = document.createElement('a');
    directLink.href = '/en/warehouse-map.html';
    directLink.textContent = 'Open the standalone map';
    status.append(message, directLink);
    mount.replaceChildren(iframe, status);
    setTimeout(() => {
      if (status.isConnected && !status.hidden) {
        message.textContent = 'The map is taking longer to load. You can open it in its own page.';
      }
    }, 15000);
  }
  window.addEventListener('message', event => {
    if (event.origin !== location.origin) return;
    const mount = [...document.querySelectorAll('.map-mount')].find(item => item.querySelector('iframe')?.contentWindow === event.source);
    if (!mount) return;
    const status = mount.querySelector('.map-load-status');
    if (event.data?.type === 'zhengzhong-map-ready') status?.remove();
    if (event.data?.type === 'zhengzhong-map-error') {
      const message = status?.querySelector('p');
      if (message) message.textContent = 'The interactive map is unavailable in this browser. Open the map page to view location details.';
    }
  });
  function updateMaps() {
    observer?.disconnect();
    document.querySelectorAll('.map-mount').forEach(mount => {
      if (!mount.closest('.page.active')) {
        mount.replaceChildren();
        return;
      }
      showMapPlaceholder(mount);
      if ('IntersectionObserver' in window) {
        observer ||= new IntersectionObserver(entries => {
          for (const entry of entries) if (entry.isIntersecting) {
            mountMap(entry.target);
            observer.unobserve(entry.target);
          }
        }, {rootMargin:'250px'});
        observer.observe(mount);
      } else mountMap(mount);
    });
  }
  function showPage({resetScroll = true} = {}) {
    let id = location.hash.slice(1) || 'home';
    if (!validPages.has(id)) id = 'home';
    for (const page of pages) {
      const active = page.id === 'page-' + id;
      page.classList.toggle('active', active);
      page.hidden = !active;
    }
    document.querySelectorAll('[data-page]').forEach(link => {
      const active = link.dataset.page === id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    closeMenu();
    updateMaps();
    if (resetScroll) window.scrollTo({top:0, behavior:'instant'});
    document.dispatchEvent(new CustomEvent('zhengzhong:pagechange', {detail:{page:id}}));
  }
  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
    if (link.hash === location.hash) showPage();
  }));
  const warehouseTabs = [...document.querySelectorAll('[data-warehouse-tab]')];
  function selectWarehouseTab(tab, focus = false) {
    for (const item of warehouseTabs) {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(item.dataset.warehouseTab);
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    }
    if (focus) tab.focus();
  }
  warehouseTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectWarehouseTab(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % warehouseTabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + warehouseTabs.length) % warehouseTabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = warehouseTabs.length - 1;
      if (next !== undefined) {event.preventDefault();selectWarehouseTab(warehouseTabs[next], true);}
    });
  });
  if (warehouseTabs[0]) selectWarehouseTab(warehouseTabs[0]);
  window.addEventListener('hashchange', () => showPage());
  showPage({resetScroll:false});
})();
