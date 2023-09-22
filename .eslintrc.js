module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    Vue: true,
    Vuex: true,
    axios: true,
    VueRouter: true,
  },
  extends: [
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 该规则要求组件名总是多字的
    "vue/multi-word-component-names": [
      0,
      {
        ignores: [],
      },
    ],
  },
};
