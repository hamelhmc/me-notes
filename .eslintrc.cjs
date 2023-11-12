module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-strict',
    'plugin:prettier/recommended'
  ],
  rules: {
    // possible errors
    'for-direction': 'error',
    'no-prototype-builtins': 'error',
    'no-template-curly-in-string': 'error',
    'no-unsafe-negation': 'error',
    'array-callback-return': ['error', { checkForEach: true }],
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false
      }
    ],
    'require-atomic-updates': 'error',

    // best practices
    camelcase: ['error', { properties: 'never' }],
    eqeqeq: 'error',
    'new-cap': ['error', { capIsNew: false }],
    'no-array-constructor': 'error',
    'no-console': ['error', { allow: ['error'] }],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-extend-native': 'error',
    'no-lonely-if': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    yoda: 'error',
    'block-scoped-var': 'error',
    complexity: 'error',
    'consistent-return': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-proto': 'error',
    'no-restricted-properties': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'require-await': 'error',
    'wrap-iife': 'error',
    'no-unused-vars': 'off',

    // stylistic
    'consistent-this': ['warn', 'that'],
    'func-name-matching': 'error',
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'max-depth': 'warn',
    'max-lines': ['warn', 1000],
    'max-params': ['warn', 4],
    'no-bitwise': 'warn',
    'no-multi-assign': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unneeded-ternary': 'warn',
    'one-var': ['warn', 'never'],
    'operator-assignment': 'warn',
    curly: 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }
    ],

    // es2015
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'prefer-numeric-literals': 'warn',

    // typescript
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          // Index signature
          'signature',

          // Fields
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-decorated-field',
          'protected-decorated-field',
          'private-decorated-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-abstract-field',
          'protected-abstract-field',

          // Constructors
          'public-constructor',
          'protected-constructor',
          'private-constructor',

          // Methods
          'public-abstract-method',
          'protected-abstract-method',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-decorated-method',
          'protected-decorated-method',
          'private-decorated-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method'
        ]
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/prefer-readonly': ['error'],
    '@typescript-eslint/promise-function-async': ['error', { checkArrowFunctions: false }],
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/no-unnecessary-condition': ['error'],
    '@typescript-eslint/prefer-nullish-coalescing': ['error']
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        project: './tsconfig.json'
      },
      rules: {}
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json'
      },
      rules: {}
    }
  ]
};
