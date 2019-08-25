import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TicketForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="error-message">
                    <div className="header" >{error}</div>
                </div>
            );
        }
    }

    renderFlightDropdown = ({ input, data, label }) => {
        return (
            <div>
                <label>{label}</label>
                <select {...input}>
                    <option value="">Select</option>
                    {data.map(({ id }) => {
                        return <option key={id} value={id}>{id}</option>;
                    })}
                </select>
            </div>
        );
    }

    renderPassengerDropdown = ({ input, data, label }) => {
        return (
            <div>
                <label>{label}</label>
                <select {...input}>
                    <option value="">Select</option>
                    {data.map(({ id, name }) => {
                        return <option key={id} value={id}>{name}</option>;
                    })}
                </select>
            </div>
        );
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
        const { flights, passengers } = this.props;

        if (!flights || !passengers)
            return <div>Loading...</div>

        return (
            <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field
                    label="Select Flight"
                    name="flight_id"
                    component={this.renderFlightDropdown}
                    data={Object.values(flights)} 
                />
                <Field
                    label="Select Passenger"
                    name="passenger_id"
                    component={this.renderPassengerDropdown}
                    data={Object.values(passengers)} 
                />
                <Field label="Register Seat" name="seat_number" component={this.renderInput} />

                <button className="ui button primary">Submit</button>
            </form>
        ); 
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.flight) {
        errors.title = 'Please, select a flight.';
    }

    if (!formValues.passenger) {
        errors.title = 'Please, select a passenger.';
    }

    if (!formValues.seat) {
        errors.title = 'Please, register a seat.';
    }

    return errors;
}

export default reduxForm({
    form: 'ticketForm',
    validate
})(TicketForm);