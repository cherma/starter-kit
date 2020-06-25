/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { authProps } from 'constants/prop-type-constants';
import { Link } from 'react-router-dom';
import { Card, CardBody, Form, Container, Col } from 'reactstrap';
import { renderIf } from 'utils/helper';
import ActivationContent from './ActivationContent';
import AppLoader from 'components/common-components/AppLoader';
import { authPath } from 'constants/router-constants';
import L from 'utils/localization';
import './Activation.style.scss';

const Activation = ({ activateAccount, authDetails }) => {
  const { userActivation, isProfileChange, isLoading } = authDetails;
  useEffect(()=>{
    activateAccount(window.location.href.split('id=')[1].split('&')[0]);
  },[]);

  const getActivationLayout = () => {
    switch(userActivation) {
      case 'success': return <ActivationContent icon="success" message={isProfileChange ? L.t('Auth.activation.updated') : L.t('Auth.activation.registered')}/>;
      case 'invalid id': return <ActivationContent icon="wrong" message={L.t('Auth.activation.invalidId')}/>;
      case 'already activated': return <ActivationContent icon="wrong" message={isProfileChange ? L.t('Auth.activation.alreadyUpdated'):L.t('Auth.activation.alreadyRegistered')} />;
      case 'link expired': return <ActivationContent icon="wrong" message={L.t('Auth.activation.expired')}/>;
      default: return <ActivationContent icon="wrong" />;
    }
  };

  return(
    <div className="activation-page">
      <Container>
        <Col xs={12}>
          <Form>
            <Card>
              <CardBody className="activation-page--body">
                {
                  renderIf(
                    () => isLoading,
                    () => <AppLoader />,
                    () => getActivationLayout()
                  )
                }
                <Link to={authPath.login}>
                  {L.t('Auth.activation.loginText')}<i className="now-ui-icons arrows-1_share-66"></i>
                </Link>
              </CardBody>
            </Card>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

Activation.propTypes = {
  activateAccount: PropTypes.func,
  authDetails: authProps
};

export default Activation;