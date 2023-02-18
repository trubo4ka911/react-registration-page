import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';

const AvatarUpload = props => {
  const { avatar, actions } = props;

  const handleAvatarChange = event => {
    const file = event.target.files[0];
    actions.setAvatar(file);
  };

  return (
    <div>
      <h2>Step 3: Upload Avatar</h2>
      <div>
        <input type="file" onChange={handleAvatarChange} />
      </div>
      {avatar && (
        <div>
          <img src={URL.createObjectURL(avatar)} alt="Avatar Preview" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    avatar: state.registration.avatar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarUpload);
