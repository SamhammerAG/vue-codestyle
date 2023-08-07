# vue-codestyle for vue3

Requirements

-   node 18
-   yarn 1.x (latest)

## Project creation

How to create and setup a vue3 typescript project with codestyle using eslint + prettier

### create project https://github.com/vuejs/create-vue

```
yarn create vue

success Installed "create-vue@3.6.1" with binaries:

√ Project name: ... vue-project
√ Add TypeScript? ... Yes
√ Add JSX Support? ... No
√ Add Vue Router for Single Page Application development? ... Yes
√ Add Pinia for state management? ... Yes
√ Add Vitest for Unit Testing? ... Yes
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... Yes
√ Add Prettier for code formatting? ... Yes
```

### install packages

```
yarn add sass -D
yarn add autoprefixer -D
yarn add postcss-html -D
yarn add stylelint -D
yarn add stylelint-config-recommended-scss -D
yarn add stylelint-config-recommended-vue -D
yarn add eslint-plugin-import -D
```

### adjust configuration

-   IDE
    -   Add [.vscode/settings.json](.vscode/settings.json) and exclude it from [.gitignore](.gitignore)
    -   Add [.vscode/extensions.json](.vscode/extensions.json)
    -   Install extension from workspace recommendations: @recommended
    -   Disable extension @builtin typescript-language-features (replaced by volar)
    -   Disable extension @installed vetur (conflicts with volar)
-   CodeStyle
    -   Add EditorConfig [.editorconfig](.editorconfig)
    -   Add Prettier Config [.prettierrc.json](.prettierrc.json)
    -   Add StyleLint Config [.stylelintrc.json](.stylelintrc.json)
    -   Add SAG Rules Config [.eslintsag.cjs](.eslintsag.cjs)
    -   Update ESLint Config [.eslintrc.cjs](.eslintrc.cjs)
        -   Change plugin:vue/essential to plugin:vue/vue3-strongly-recommended
        -   Change @vue/eslint-config-typescript to @vue/eslint-config-typescript/recommended
        -   Add SAG Rules as last rule before @vue/eslint-config-prettier
-   Other
    -   Add Autoprefixer [postcss.config.cjs](postcss.config.cjs)
    -   Adjust [vite.config.ts](vite.config.ts)
        -   server > port > 8080
        -   build > target > esnext

##### Adjust package.json

```
"test:unit": "vitest run"
"lint:style": "stylelint src/**/*.{css,scss,vue} --fix"
```

### Codestyle Troubleshooting

Want to know which rules we are using?
We can dump the complete configuration by cli commands.

```
yarn run --silent eslint --print-config .eslintrc.cjs
yarn run --silent stylelint --print-config .stylelintrc.js
```

### Settings Guides

-   https://vuejs.org/guide/typescript/overview.html#ide-support
-   https://eslint.vuejs.org/user-guide/#editor-integrations
-   https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint#usage
