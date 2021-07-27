module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:jest-dom/recommended",
    ],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
    },

    settings: {
        react: {
            version: "detect",
        },
    },
};