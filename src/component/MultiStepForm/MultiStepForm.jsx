import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Details from './Details';
import Address from './Address';
import AvatarUpload from './AvatarUpload';
import PasswordForm from './PasswordForm';
import Review from './Review';
import * as actions from '../../redux/actions';

class MultiStepForm extends Component {
  render() {
    const { step, actions } = this.props;
    switch (step) {
      case 1:
        return <Details />;
      case 2:
        return <Address />;
      case 3:
        return <AvatarUpload />;
      case 4:
        return <PasswordForm />;
      case 5:
        return <Review />;
      default:
        return <Details />;
    }
  }
}

const mapStateToProps = state => {
  return {
    step: state.registration.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiStepForm);
