# vue-codestyle

Requirements

-   node 12 (or higher)
-   yarn 1.x (latest)

## Project creation

How to create and setup a vue2 typescript project with codestyle using eslint + prettier

Install Vue CLI version 5.x

```
yarn global add @vue/cli@next
```

Create Project

```
vue create vue-codestyle
```

```
Vue CLI v5.0.0-rc.1
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

## Codestyle setup

-   Add EditorConfig [.editorconfig](.editorconfig)
-   Add Prettier Config [.prettierrc.json](.prettierrc.json)
-   Update ESLint Config [.eslintrc.js](.eslintrc.js)
    -   Change plugin:vue to strongly-recommended

## Visual Studio Code setup

Install Extensions

-   https://marketplace.visualstudio.com/items?itemName=octref.vetur
-   https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
-   https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Setup Extensions [.vscode/settings.json](.vscode/settings.json)

-   disable vetur.validation.template -> we use eslint
-   disable vetur.format.enable -> we use prettier
-   enable vetur.validation.templateProps -> we want property validation, but eslint dont has it
-   enable vetur.experimental.templateInterpolationService -> we want autocomplete in expressions
-   enable editor.formatOnSave -> we always want formatted code
-   enable editor.formatOnPaste -> we always want formatted code
-   (optional) set defaultFormatter for vue, typescript to prettier -> when we have multiple formatter extensions installed

Settings Guides

-   https://eslint.vuejs.org/user-guide/#editor-integrations
-   https://vuejs.github.io/vetur/guide/setup.html#vs-code-config
