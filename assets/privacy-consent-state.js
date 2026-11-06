/* Versioned, explicit consent. Preview choices are never production consent. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ZZPrivacyState = api;
}(typeof window === 'undefined' ? this : window, function () {
  'use strict';
  const KEY = 'zz_privacy_v1';
  const VERSION = '2026-11-06';
  const TTL = 180 * 24 * 60 * 60 * 1000;
  function parse(raw, now = Date.now()) {
    try {
      const value = JSON.parse(raw);
      if (!value || value.version !== VERSION || !['allowed', 'denied'].includes(value.analytics)) return null;
      if (!Number.isFinite(value.updatedAt) || !Number.isFinite(value.expiresAt)) return null;
      if (value.updatedAt > now || value.expiresAt <= now || value.expiresAt !== value.updatedAt + TTL) return null;
      return value;
    } catch (_) { return null; }
  }
  function create(analytics, now = Date.now()) {
    if (!['allowed', 'denied'].includes(analytics)) throw new TypeError('Invalid preference');
    return {version: VERSION, analytics, updatedAt: now, expiresAt: now + TTL};
  }
  return {KEY, VERSION, TTL, parse, create};
}));
