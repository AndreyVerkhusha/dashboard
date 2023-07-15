module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "semi": ['warn', 'always'],
    "quotes": ["warn", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "max-len": ["error", {"code":  125}],
    "comma-dangle": ["error", "never"],
    "semi": ["warn", "always"]
  },
}
