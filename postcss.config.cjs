const plugins = {
  "@pandacss/dev/postcss": {},
  ...(process.env.NODE_ENV === "production" ? { "postcss-prune-var": {} } : {}),
};

console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);
console.log({ plugins });

module.exports = {
  plugins,
};
