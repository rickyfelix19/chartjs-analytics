module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true
  },
  extends: ['plugin:cypress/recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier', 'cypress'],
  rules: {
    'prettier/prettier': 'error',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'no-unused-expressions': 0
  }
};
