import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {
render() {
const { formData } = this.props;
return (
<div>
<h2>Success</h2>
<p>Thank you for registering, {formData.firstName} {formData.lastName}.</p>
<p>Your email is: {formData.email}.</p>
</div>
);
}
}

const mapStateToProps = state => {
return {
formData: state.formData
}
}

export default connect(mapStateToProps)(Success);