module.exports = {
  "extends": [
    "react-app",
    "airbnb",
    "plugin:jsx-a11y/strict",
    "prettier",
    "prettier/react",
    "plugin:testing-library/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ],
  "plugins": ["jsx-a11y", "prettier", "testing-library", "jest-dom"],
  "rules": {
    "no-use-before-define": 0,
    "react/no-danger": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        "no-use-before-define": false
      }
    ],
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debug": "warn",
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
    "jsx-a11y/label-has-associated-control": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "jsx-a11y/label-has-for": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }]
  }
}
