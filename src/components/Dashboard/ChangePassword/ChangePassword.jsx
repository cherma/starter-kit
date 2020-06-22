import React from 'react';
import Button from 'components/common-components/CustomButton';

const ChangePassword = ({ showAlert }) => <Button onClick={() => showAlert({
  type: 'success',
  title: 'Woot!',
  content: 'You have clicked the button!',
  showCancel: true,
})}> Ok </Button>;

export default ChangePassword;