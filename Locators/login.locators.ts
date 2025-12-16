export const LoginLocators = {
  loginPageUrl: 'https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com/',
  loginPageTitle: 'Login | Salesforce',
  usernameField: "#username",
  passwordField: "#password",
  loginButton: "#Login",
  forgotLogin: "#forgot_password_link",
  rememberMe:"#rememberUn",
  errorMessage: "#(//div[@class='loginError'])[2]",
  postLoginPageUrl: `https://orgfarm-f2e792f5b2-dev-ed.develop.lightning.force.com/lightning/page/home`,
  postLoginTitle:`Home | Salesforce`,
  clickNavToDZ: "(//div[@role='button'])[1]",
  // navToDZ: "//span[normalize-space(text())='Dev Zone']",
  navToDZ: "span a i[class*='quickly-icon']",
  buildClick: "//span[text()=' Build ']",
  pageClick: "//li[6]//a[1]"
};


//export 
    //export is a keywork “Make this variable available to other files.”
    //Its same like public class LoginLocators - 
    //Without export, only this file can use LoginLocators.
    //With export, you can import it into other files.

// const LoginLocators={}
  // You are creating a constant variable named LoginLocators.
  // The value assigned to it is an object (because it has key-value pairs inside { }).
  // LoginLocators = constant object variable.

// Since your locator files only store static locators and no logic,
// using export const is perfect — it keeps things simple, fast, and readable. Instead of creating class.