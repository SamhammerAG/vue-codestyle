const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {}
  }
});
