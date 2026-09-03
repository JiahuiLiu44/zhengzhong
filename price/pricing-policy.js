(function attachPricingPolicy(root, factory) {
  const policy = factory();
  if (typeof module === "object" && module.exports) module.exports = policy;
  if (root) root.QuotePricingPolicy = policy;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPricingPolicy() {
  const additionalItemRate = 0.3;

  return Object.freeze({
    additionalItemLine() {
      return {
        name: "续件费",
        detail: "同一订单第2件起，每增加1件收取 $0.30",
        display: "$0.30/件",
        amount: 0,
        informational: true,
      };
    },
  });
});
