module.exports = {
  plugins: [
    "@pandacss/dev/postcss",
    process.env.NODE_ENV === "production" ? "postcss-prune-var" : undefined,
  ],
};
