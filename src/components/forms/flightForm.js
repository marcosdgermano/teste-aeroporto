import React from 'react';
import { Field, reduxForm } from 'redux-form';

class FlightForm extends React.Component {
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
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render () {
        return (
            <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="origin" component={this.renderInput} label="Enter the origin" />
                <Field name="destination" component={this.renderInput} label="Enter the destination" />
                <Field name="departureTime" component={this.renderInput} label="Enter the departure time" />
                <Field name="arrivalTime" component={this.renderInput} label="Enter the arrival time" />

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
    form: 'flightForm',
    validate
})(FlightForm);