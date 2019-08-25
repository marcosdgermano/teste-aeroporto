import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { DropdownList } from 'react-widgets';

class PassengerForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="error-message">
                    <div className="header" >{error}</div>
                </div>
            );
        }
    }
    
    renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="on" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    renderDropdown = ({ input, data, label }) => {
        return (
            <div>
                <label>{label}</label>
                <select {...input}>
                    <option value="">Select</option>
                    {data.map(gender => {
                        return <option key={gender} value={gender}>{gender}</option>;
                    })}
                </select>
            </div>
        );
    }
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render () {
        return (
            <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="name" component={this.renderInput} label="Enter the name" />
                <Field
                    label="Select gender"
                    name="gender"
                    component={this.renderDropdown}
                    data={[ 'male', 'female' ]} 
                />

                <button className="ui button primary">Submit</button>
            </form>
        ); 
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'example';
    }

    return errors;
}

export default reduxForm({
    form: 'passengerForm',
    validate
})(PassengerForm);