module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/strongly-recommended",
    //"plugin:vuetify/base", // only required for vuetify projects
    "eslint:recommended",
    "@vue/typescript/recommended",
    "./.eslintsag",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
