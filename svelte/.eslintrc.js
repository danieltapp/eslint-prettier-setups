module.exports = {
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
    },
    env: {
      es6: true,
      browser: true,
    },
    extends: ['prettier'],
    plugins: ['svelte3', 'prettier'],
    overrides: [
      {
        files: ['**/*.svelte'],
        processor: 'svelte3/svelte3',
      },
    ],
    rules: {
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],

      semi: ['error', 'never'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'arrow-parens': ['error', 'as-needed'],
      'jsx-quotes': ['error', 'prefer-single'],
      'no-use-before-define': 'off',
      'no-console': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'no-shadow': 'off',
      'no-return-assign': 'off',
      'no-param-reassign': 'off',
    },
  }
