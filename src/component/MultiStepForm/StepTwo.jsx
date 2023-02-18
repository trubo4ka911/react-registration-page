import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFormData } from '../redux/formActions';

class StepTwo extends Component {
constructor(props) {
super(props);
this.state = {
firstName: '',
lastName: '',
address: '',
city: '',
state: '',
zip: ''
};
}

componentDidMount() {
const { formData } = this.props;
this.setState({
firstName: formData.firstName,
lastName: formData.lastName,
address: formData.address,
city: formData.city,
state: formData.state,
zip: formData.zip
});
}

_handleChange = event => {
const { name, value } = event.target;
this.setState({
[name]: value
});
};

_handleSubmit = event => {
event.preventDefault();
const { nextStep, prevStep, setFormData } = this.props;
const { firstName, lastName, address, city, state, zip } = this.state;
const formData = {
firstName: firstName,
lastName: lastName,
address: address,
city: city,
state: state,
zip: zip
};
setFormData(formData);
nextStep();
};

render() {
const { firstName, lastName, address, city, state, zip } = this.state;
return (
<div>
<h2>Step 2</h2>
<form onSubmit={this._handleSubmit}>
<div>
<label>First Name:</label>
<input
           type="text"
           name="firstName"
           value={firstName}
           onChange={this._handleChange}
         />
</div>
<div>
<label>Last Name:</label>
<input
           type="text"
           name="lastName"
           value={lastName}
           onChange={this._handleChange}
         />
</div>
<div>
<label>Address:</label>
<input
           type="text"
           name="address"
           value={address}
           onChange={this._handleChange}
         />
</div>
<div>
<label>City:</label>
<input
           type="text"
           name="city"
           value={city}
           onChange={this._handleChange}
         />
</div>
<div>
<label>State:</label>
<input
           type="text"
           name="state"
           value={state}
           onChange={this._handleChange}
         />
</div>
<div>
<label>Zip Code:</label>
<input
           type="text"
           name="zip"
           value={zip}
           onChange={this._handleChange}
         />
</div>
<button onClick={this.props.prevStep}>Back</button>
<button type="submit">Next</button>
</form>
</div>
);
}
}

const mapStateToProps = state => {
return {
formData: state.formData
};
};

const mapDispatchToProps = dispatch => {
return bindActionCreators({
setFormData
}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);