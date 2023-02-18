import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFormData } from '../../redux/formActions';

class StepThree extends Component {
constructor(props) {
super(props);
this.state = {
address: '',
city: '',
state: '',
zip: ''
};
}

componentDidMount() {
const { formData } = this.props;
this.setState({
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
const { nextStep, setFormData } = this.props;
const { address, city, state, zip } = this.state;
const formData = {
address: address,
city: city,
state: state,
zip: zip
};
setFormData(formData);
nextStep();
};

_handlePrev = event => {
event.preventDefault();
const { prevStep } = this.props;
prevStep();
};

render() {
const { address, city, state, zip } = this.state;
return (
<div>
<h2>Step 3</h2>
<form onSubmit={this._handleSubmit}>
<div>
<label>Address</label>
<input type="text" name="address" value={address} onChange={this._handleChange} />
</div>
<div>
<label>City</label>
<input type="text" name="city" value={city} onChange={this._handleChange} />
</div>
<div>
<label>State</label>
<input type="text" name="state" value={state} onChange={this._handleChange} />
</div>
<div>
<label>Zip</label>
<input type="text" name="zip" value={zip} onChange={this._handleChange} />
</div>
<button onClick={this._handlePrev}>Prev</button>
<button type="submit">Next</button>
</form>
</div>
);
}
}

const mapStateToProps = state => {
return {
formData: state.formData,
}
}

const mapDispatchToProps = dispatch => {
return bindActionCreators({
setFormData
}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StepThree);