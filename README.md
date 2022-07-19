# vue-codestyle

Requirements

-   node 12 (or higher)
-   yarn 1.x (latest)

## Project creation

How to create and setup a vue2 typescript project with codestyle using eslint + prettier

Install Vue CLI version 5.x

```
yarn global add @vue/cli
```

Create Project

creates vue project with eslint

```
vue create vue-codestyle

Vue CLI v5.0.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, TS, Router, CSS Pre-processors, Linter, Unit
? Choose a version of Vue.js that you want to start the project with 2.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? Yes
? Save preset as: sag-default
```

adds stylelint

```
vue add @samhammer/vue-cli-plugin-stylelint@next

? Pick a stylelint config: prettier
? Include SCSS support Yes
? Pick additional stylelint features:
```

## Codestyle setup

-   Add EditorConfig [.editorconfig](.editorconfig)
-   Add Prettier Config [.prettierrc.json](.prettierrc.json)
-   Add SAG Rules Config [.eslintsag.json](.eslintsag.json) -> TODO create npm package
-   Add eslint-plugin-import to dev dependencies (yarn add -D) -> used in SAG Rules
-   Update ESLint Config [.eslintrc.js](.eslintrc.js)
    -   Change plugin:vue to strongly-recommended
    -   Change rules no-console & no-debugger to off
    -   Add SAG Rules as last rule, but before plugin:prettier

## Codestyle Troubleshooting

Want to know which rules we are using?
We can dump the complete configuration by cli commands.

```
yarn run --silent eslint --print-config .eslintrc.js
yarn run --silent stylelint --print-config .stylelintrc.js
```

## Visual Studio Code setup

#### Install VSCode Extensions

-   https://marketplace.visualstudio.com/items?itemName=octref.vetur
-   https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
-   https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

#### Setup VSCode Settings

-   Add [.vscode/settings.json](.vscode/settings.json)

#### Explain VSCode Settings

Describes why/how to set specific settings.

ESLint

-   disable vetur.validation.template -> we use eslint
-   disable vetur.format.enable -> we use prettier
-   enable vetur.validation.templateProps -> we want property validation, but eslint dont has it
-   enable vetur.experimental.templateInterpolationService -> we want autocomplete in expressions

StyleLint

-   disable scss.validate & css.validate -> we use stylelint
-   stylelint.validate add vue -> we want to validate style tag in vue files also

Prettier Autoformat

-   enable editor.formatOnSave -> we always want formatted code
-   enable editor.formatOnPaste -> we always want formatted code
-   add editor.codeActionsOnSave with source.fixAll.eslint -> we always want to fix eslint errors (helps to fix pasting code samples)
-   set defaultFormatter to esbenp.prettier-vscode for all languages used in project (vue, typescript, scss, json ...) -> required when multiple formatters are installed

Sample for language "vue"

```
"[vue]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
```

Settings Guides

-   https://eslint.vuejs.org/user-guide/#editor-integrations
-   https://vuejs.github.io/vetur/guide/setup.html#vs-code-config
-   https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint#usage
