export default {
  signup:{
    content: {
      terms: 'By signing up, you agree to the ',
      termsLink: 'Terms of Service and Privacy Policy'
    },
    errors: {
      email: 'Please enter a valid email',
      existingEmail: 'Email already exist!',
      firstName: 'Please enter a valid first name',
      lastName: 'Please enter a valid last name',
      passwordLength: 'Password length should be atleast 6 letters',
      passwordReq: 'Password must be the combination of letters & numbers',
      phone: 'Please enter a valid number',
      phoneExist: 'Phone number already exist!',
      captcha: 'Please check the check box',
      notActivatedError: 'You have already registered, please check your mail for activation link. \n If someone other than you have initiated please call +919176650250'
    }
  },
  forgetPassword: {
    failure: 'Error occurred!! Please contact administrator 9176650250',
    success: 'Mail has been sent to reset your password',
    captcha: 'Please check the check box'
  },
  activation: {
    updated: 'Email updated successfully',
    registered: 'Registered successfully',
    alreadyUpdated: 'Email already updated',
    alreadyRegistered: 'Account already registered',
    invalidId: 'Invalid Id',
    expired: 'Link Expired',
    loginText: 'Back to login'
  },
  resetPassword: {
    cta: 'Reset Password',
    expired: 'Link already used to change password',
    invalid: 'Link is Invalid',
    success: 'Password has been reset successfully',
  }
};