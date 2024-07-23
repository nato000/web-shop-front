module.exports = {
	env: {
		"browser": true,
		"es2021": true,
		"node": true
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		"no-mixed-spaces-and-tabs": 0,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: [
		"@typescript-eslint",
		"react"
	],

}
