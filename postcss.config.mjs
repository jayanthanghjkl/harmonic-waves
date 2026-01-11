/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Note: This changed from just 'tailwindcss'
    autoprefixer: {},
  },
};

export default config;