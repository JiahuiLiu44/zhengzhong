/* Basic consent mode: Google is not loaded until an explicit, current grant. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ZZAnalytics = api.createController(root, document, root.ZZPrivacyState);
}(typeof window === 'undefined' ? this : window, function () {
  'use strict';
  const ID = 'G-H9ZYZN337Z';
  const COOKIE_SECONDS = 180 * 24 * 60 * 60;
  const PATHS = new Set(['/', '/en/', '/price/', '/en/price/', '/privacy/', '/en/privacy/',
    '/services/fulfillment/', '/services/inventory-transfer/', '/services/shipping-label-replacement/',
    '/en/services/fulfillment/', '/en/services/inventory-transfer/', '/en/services/shipping-label-replacement/']);
  function pageData(href, referrer, title) {
    try {
      const url = new URL(href);
      if (url.protocol !== 'https:' || !['zhengzhong.tech', 'www.zhengzhong.tech'].includes(url.hostname)) return null;
      const path = url.pathname.replace(/index\.html$/, '');
      if (!PATHS.has(path)) return null;
      let source = '';
      try { const ref = new URL(referrer); if (['http:', 'https:'].includes(ref.protocol)) source = ref.origin + '/'; } catch (_) {}
      return {page_location: 'https://zhengzhong.tech' + path, page_referrer: source, page_title: String(title).slice(0, 300)};
    } catch (_) { return null; }
  }
  function createController(win, doc, state) {
    let allowed = false;
    let loaded = false;
    let pending = false;
    let script = null;
    let generation = 0;
    let pageSent = false;
    const flag = 'ga-disable-' + ID;
    win[flag] = true;
    const data = pageData(win.location.href, doc.referrer, doc.title);
    const denied = {analytics_storage:'denied', ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied'};
    function gtag() { win.dataLayer.push(arguments); }
    function clearCookies() {
      if (!data) return;
      const names = new Set(['_ga', '_ga_' + ID.slice(2)]);
      for (const token of doc.cookie.split(';')) {
        const name = token.trim().split('=')[0];
        if (!names.has(name)) continue;
        for (const domain of ['', 'zhengzhong.tech', '.zhengzhong.tech', win.location.hostname]) {
          doc.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax; Secure' + (domain ? '; Domain=' + domain : '');
        }
      }
    }
    function configure() {
      if (!allowed || win[flag] || !data) return;
      gtag('consent', 'update', {...denied, analytics_storage:'granted'});
      gtag('config', ID, {...data, send_page_view:false, allow_google_signals:false,
        allow_ad_personalization_signals:false, cookie_expires:COOKIE_SECONDS,
        cookie_update:false, cookie_domain:'zhengzhong.tech', cookie_path:'/', cookie_flags:'SameSite=Lax;Secure'});
      if (!pageSent) {
        gtag('event', 'page_view', {...data, send_to:ID});
        pageSent = true;
      }
    }
    function stop() {
      allowed = false;
      win[flag] = true; // Official opt-out switch, before updating consent or clearing cookies.
      generation++;
      if (pending) {
        script?.remove();
        pending = false;
        if (win.dataLayer) win.dataLayer.length = 0;
      }
      if (loaded) gtag('consent', 'update', denied);
      clearCookies();
    }
    function applyConsent(record) {
      const valid = state.parse(JSON.stringify(record));
      if (!valid || valid.analytics !== 'allowed') { stop(); return; }
      if (!data) return; // Local previews, unknown routes and embeds never send production analytics.
      if (allowed && (loaded || pending)) return;
      allowed = true;
      win[flag] = false;
      if (loaded) { configure(); return; }
      win.dataLayer = win.dataLayer || [];
      win.gtag = gtag;
      gtag('consent', 'default', denied);
      gtag('set', 'ads_data_redaction', true);
      gtag('set', 'url_passthrough', false);
      gtag('set', {...data, allow_google_signals:false, allow_ad_personalization_signals:false});
      gtag('consent', 'update', {...denied, analytics_storage:'granted'});
      gtag('js', new Date());
      pending = true;
      const ticket = ++generation;
      script = doc.createElement('script');
      script.async = true;
      script.id = 'zz-google-analytics';
      script.referrerPolicy = 'origin';
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
      script.onload = () => {
        if (ticket !== generation || !allowed || win[flag]) return;
        pending = false;
        loaded = true;
        configure();
      };
      script.onerror = () => { if (ticket === generation) { pending = false; script?.remove(); } };
      doc.head.appendChild(script);
    }
    return {applyConsent};
  }
  return {ID, COOKIE_SECONDS, pageData, createController};
}));
