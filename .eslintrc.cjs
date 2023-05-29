module.exports = {
    env: { browser: true, es2020: true, node: true },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh', '@typescript-eslint', 'react', 'jsx-a11y'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react-refresh/only-export-components': 'warn',
        'object-curly-newline': ['error', { 'multiline': true, 'consistent': true }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
        'array-bracket-newline': ['error', { 'multiline': true }],
        'array-element-newline': ['error', 'consistent'],
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'no-console': 'error',
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'indent': ['error'],
        'no-trailing-spaces': 'error',
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'block-spacing': 'error',
        'padded-blocks': ['error', 'never'],
        'space-before-blocks': 'off',
        'curly': ['error', 'multi-line', 'consistent'],
        'no-return-assign': 'error',
        'no-useless-return': 'error',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'semi': 'off',
        '@typescript-eslint/semi': 'error',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],

        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/space-before-blocks': 'error',
        '@typescript-eslint/no-shadow': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-wrap-multilines': [
            'error',
            {
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'return': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line'
            }
        ],
        'react/jsx-max-props-per-line': ['error', { 'maximum': { 'single': 3, 'multi': 1 } }],
        'react/jsx-first-prop-new-line': 'error',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': 'error',
        'react/jsx-closing-tag-location': ['error'],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned']
    },
};
