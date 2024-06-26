import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const config = {
    ...eslintPluginPrettierRecommended,
    ignores: [
        '/node_modules/',
        '**/node_modules/**',
        '**/lib/**',
        '**/dist/**',
    ],
};

export default [config];
