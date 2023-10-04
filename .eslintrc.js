module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": "standard-with-typescript",
  "overrides": [
      {
          "env": {
              "node": true
          },
          "files": [
              ".eslintrc.{js,cjs}"
          ],
          "parserOptions": {
              "sourceType": "script"
          }
      }
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
  },

  "plugins": [
      "@typescript-eslint",
      "cypress"
    ],
    "rules": {
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "no-unused-vars": "warn",
      "require-jsdoc": "warn",
      "max-len": [ "error", { "code": 120 } ]
    }
}
