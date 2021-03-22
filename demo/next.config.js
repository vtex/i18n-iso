const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProduction
    ? "https://cdn.statically.io/gh/vtex/i18n-iso/gh-pages/"
    : "",
};
