export default {
  signup:{
    errors: {
      email: 'Please enter a valid email',
      existingEmail: 'Email already exist!',
      firstName: 'Please enter a valid first name',
      lastName: 'Please enter a valid first name',
      passwordLength: 'Password length should be atleast 6 letters',
      passwordReq: 'Password must be the combination of letters & numbers'
    }
  },
  forgetPassword: {
    failure: 'Error occurred!! Please contact administrator 9176650250',
    success: 'Mail has been sent to reset your password',
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
    success: 'Password has been reset successfully'
  }
};