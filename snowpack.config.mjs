/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-vue",
    "@snowpack/plugin-vue/plugin-tsx-jsx.js",
    "@snowpack/plugin-dotenv",
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "/index.html" },
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: process.env.NODE_ENV == "production",
    minify: process.env.NODE_ENV == "production",
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: {},
};
