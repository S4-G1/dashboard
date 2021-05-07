exports = {
    root: true,
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['svelte3'],
    overrides: [{files: ['*.svelte'], processor: 'svelte3/svelte3'}],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["warn", "double"],
        "sort-imports": "off",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "max-len": ["error", { code: 120 }],
    },
};
