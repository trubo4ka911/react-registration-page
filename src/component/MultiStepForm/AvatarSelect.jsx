import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';

const AvatarSelect = props => {
  const { avatar, actions } = props;

  const handleAvatarChange = event => {
    actions.setAvatar(event.target.value);
  };

  return (
    <div>
      <h2>Step 3: Select Avatar</h2>
      <div>
        <label htmlFor="avatar">Choose an Avatar:</label>
        <select name="avatar" value={avatar} onChange={handleAvatarChange}>
          <option value="">Select Avatar</option>
          <option value="avatar1">Avatar 1</option>
          <option value="avatar2">Avatar 2</option>
          <option value="avatar3">Avatar 3</option>
        </select>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AvatarSelect);
