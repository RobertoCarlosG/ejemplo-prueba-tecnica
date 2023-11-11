# Prueba
The objective of this technical test is to create a similar application to the one provided in this link: https://xxxxx. To achieve this, you must use the API provided by
https://randomuser.me/.

Here are the steps to follow

- [x] Fetch 100 rows of data using the API
- [x] Display the data in a table format
- [x] Provide the option to color rows as shown in the example
- [x] Allow the data to be sorted by country as demostrated in the example.
- [x] Enable the ability to delete a row as shown in the example
- [x] Implement a feature that allow the user to restore the initial state, meaning that all deleted rows will be recovered
- [x] Handle any potential errors thay may occur
- [x] Implement a feature that allows the user to filter data by country
- [x] Sort by clicking on the column header
- [x] Provide a README.md file with instructions on how to run the application

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
