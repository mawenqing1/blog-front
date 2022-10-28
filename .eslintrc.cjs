module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: '999.999.999'
    }
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    // 'prettier',
    // 'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    // 'prettier',
    '@typescript-eslint'
  ],
  rules: {
    // 'prettier/prettier': 'error'
  }
}
