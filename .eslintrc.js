/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['next', 'prettier'],
  plugins: ['unused-imports'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'jsx-a11y/role-supports-aria-props': 'off', // @see https://github.com/vercel/next.js/issues/27989#issuecomment-897638654
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['lodash'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            // TODO: enable this once prettier supports it
            // fixStyle: "inline-type-imports",
            fixStyle: 'separate-type-imports',
            disallowTypeAnnotations: false,
          },
        ],
      },
    },
  ],
}
