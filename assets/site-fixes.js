(() => {
  'use strict';
  const menu = document.getElementById('main-menu');
  const toggle = document.getElementById('nav-menu-toggle');
  const closeMenu = () => { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); menu.classList.toggle('is-open',open);
  });
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && menu.classList.contains('is-open')){closeMenu();toggle.focus();}
  });
  const maps = [...document.querySelectorAll('iframe[data-src]')];
  function mountMap(frame) {
    if(frame.hasAttribute('src')) return;
    frame.src = frame.dataset.src;
    frame.parentElement.querySelector('.map-placeholder')?.remove();
    frame.hidden = false;
  }
  // Observe the sized container, not the hidden iframe.
  const mapObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {if(entry.isIntersecting && entry.target.closest('.page.active')) {mountMap(entry.target.querySelector('iframe'));mapObserver.unobserve(entry.target);}});
  },{rootMargin:'150px'}) : null;
  function updateMaps(){
    mapObserver?.disconnect();
    maps.forEach(frame => {
      if(!frame.closest('.page.active') || frame.hasAttribute('src')) return;
      if(mapObserver) mapObserver.observe(frame.parentElement); else mountMap(frame);
    });
  }
  const validPages = new Set([...document.querySelectorAll('.page')].map(p=>p.id.replace('page-','')));
  function navigate(focus = false){
    const requested = location.hash.slice(1);
    const id = validPages.has(requested) ? requested : 'home';
    showPage(id);
    document.querySelectorAll('.page').forEach(panel=>{panel.hidden = panel.id !== 'page-'+id;});
    document.querySelectorAll('.nav-tab[data-page]').forEach(link=>{
      if(link.dataset.page===id) link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
    });
    closeMenu();updateMaps();
    if(focus) document.querySelector('#page-'+id+' h1')?.focus({preventScroll:true});
  }
  document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
    if(validPages.has(link.hash.slice(1)) && link.hash===location.hash){event.preventDefault();navigate(true);}
  }));
  window.addEventListener('hashchange',()=>navigate(true));
  document.querySelectorAll('.wh-tab-btn').forEach(button=>button.addEventListener('click',()=>{
    switchWH(button,button.dataset.warehouse);
    document.querySelectorAll('.wh-tab-btn').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  }));
  navigate();
  // Keep the original font families, but start their downloads after the hero.
  const loadFonts = () => {const link=document.getElementById('deferred-fonts');if(link) link.href=link.dataset.href;};
  const hero=document.querySelector('.hero-aerial');
  if(hero?.complete) loadFonts();else hero?.addEventListener('load',loadFonts,{once:true});
  hero?.addEventListener('error',loadFonts,{once:true});
})();
