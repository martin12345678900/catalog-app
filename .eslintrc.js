module.exports = {
  root: true,
  env: {
    'react-native/react-native': true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    '@react-native-community/eslint-config',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: [
    'react',
    'react-native',
    'module-resolver',
    'import',
    'unused-imports',
    '@typescript-eslint'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    JSX: true
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react/require-default-props': 'off',
    'react-native/split-platform-components': 2,
    'no-case-declarations': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 2,
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'react-native/sort-styles': [
      2,
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false
      }
    ],
    'global-require': 0,
    // eslint-plugin-import
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-named-as-default': 0,
    'react/no-unused-prop-types': 0,
    // eslint-plugin-react
    'react/jsx-closing-bracket-location': [
      1,
      {
        selfClosing: 'line-aligned',
        nonEmpty: 'after-props'
      }
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    // eslint-plugin-jsx-a11y
    'jsx-a11y/accessible-emoji': 0,
    // Disable all eslint warnings that prettier will fix
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        eslintIntegration: true,
        printWidth: 80
      }
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    // Override this since airbnb doesn't allow for of loops
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],

    'no-undef': ['error', { typeof: false }],

    'arrow-body-style': ['error', 'as-needed'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx']
      },
      'babel-module': ['.ts', '.tsx'],
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: './tsconfig.json'
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    react: {
      version: 'detect'
    }
  }
}
