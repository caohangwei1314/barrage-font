module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ["error", 4],
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'func-names': ["error", "as-needed"],
    'no-underscore-dangle': ["error", { "allow": ["_id"] }],
    'semi': "error"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
