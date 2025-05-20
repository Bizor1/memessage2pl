/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
  },
};
