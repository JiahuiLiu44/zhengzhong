/* User choices are applied before optional analytics can load. */
(() => {
  'use strict';
  const state = window.ZZPrivacyState;
  const banner = document.getElementById('zz-consent-banner');
  const dialog = document.getElementById('zz-consent-dialog');
  if (!state || !banner || !dialog) return;
  const english = document.documentElement.lang.startsWith('en');
  const words = english ? {
    allowed: 'You have allowed basic visit analytics. You can withdraw at any time.',
    denied: 'Necessary features only. Visit analytics is off.',
    unknown: 'No choice yet. Analytics stays off.',
    saved: 'Your choice is saved in this browser for up to 180 days.',
    temporary: 'Browser storage is unavailable. Your choice lasts for this page only.'
  } : {
    allowed: '已允许基础访问统计，你可随时撤回。',
    denied: '已选择仅必要功能，访问统计关闭。',
    unknown: '尚未选择，访问统计保持关闭。',
    saved: '已在本浏览器保存选择，最长180天。',
    temporary: '浏览器无法保存偏好，本次选择仅在当前页面有效。'
  };
  let preference = null;
  let returnTo = null;
  let expiryTimer;
  try { preference = state.parse(localStorage.getItem(state.KEY)); } catch (_) {}
  const panel = banner.querySelector('[data-consent-panel]');
  const receipt = banner.querySelector('[data-consent-receipt]');
  function reflect() {
    const choice = preference?.analytics || 'unknown';
    document.documentElement.dataset.zzConsent = choice;
    document.querySelectorAll('[data-consent-current]').forEach(node => { node.textContent = words[choice]; });
  }
  function apply() {
    clearTimeout(expiryTimer);
    window.ZZAnalytics?.applyConsent(preference);
    if (preference) expiryTimer = setTimeout(checkExpiry, Math.min(preference.expiresAt - Date.now() + 10, 2147483647));
  }
  function checkExpiry() {
    if (preference && !state.parse(JSON.stringify(preference))) {
      preference = null;
      reflect();
      banner.hidden = false;
      panel.hidden = false;
      receipt.hidden = true;
    }
    apply();
  }
  function openSettings(event) {
    returnTo = event.currentTarget;
    checkExpiry();
    reflect();
    dialog.showModal();
  }
  function save(choice) {
    preference = state.create(choice);
    let stored = false;
    try { localStorage.setItem(state.KEY, JSON.stringify(preference)); stored = true; } catch (_) {}
    reflect();
    apply();
    banner.hidden = false;
    panel.hidden = true;
    receipt.hidden = false;
    receipt.querySelector('[data-consent-storage]').textContent = stored ? words.saved : words.temporary;
    if (dialog.open) dialog.close();
    else receipt.querySelector('button').focus({preventScroll: true});
  }
  reflect();
  apply();
  if (preference) banner.hidden = true;
  document.querySelectorAll('[data-consent-open]').forEach(button => button.addEventListener('click', openSettings));
  document.querySelectorAll('[data-consent-choice]').forEach(button => button.addEventListener('click', () => save(button.dataset.consentChoice)));
  dialog.querySelector('[data-consent-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { returnTo?.focus({preventScroll: true}); });
  window.addEventListener('storage', event => {
    if (event.key !== state.KEY && event.key !== null) return;
    preference = state.parse(event.newValue);
    reflect();
    apply();
    banner.hidden = !!preference;
    panel.hidden = false;
    receipt.hidden = true;
  });
  // Expiry returns to undecided, including a long-lived open tab.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkExpiry();
  });
})();
