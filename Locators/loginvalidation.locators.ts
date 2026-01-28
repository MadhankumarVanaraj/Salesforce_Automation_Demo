import { error } from "node:console";

export const LoginValidationLocators = {
  loginPageUrl: 'https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com/',
  usernameField: "#username",
  passwordField: "#password",
  loginButton: "#Login",
  postLoginURL:"https://orgfarm-f2e792f5b2-dev-ed.develop.lightning.force.com/one/one.app",
  homeTab: "//span[text()='Home']",
  errorMessage: "#error",
  expectedErrorMessage: "Error: Please check your username and password. If you still can't log in, contact your Salesforce administrator.",
};