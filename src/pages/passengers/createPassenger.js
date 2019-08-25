import React from 'react';
import { connect } from 'react-redux';
import { createPassenger } from '../../redux/actions';
import PassengerForm from '../../components/forms/passengerForm';

class CreatePassenger extends React.Component {
    onSubmit = (formValues) => {
        this.props.createPassenger(formValues);
    }

    render () {
        return (
            <div>
                <h3>Create a Passenger</h3>
                <PassengerForm onSubmit={this.onSubmit} />
            </div>
        ); 
    }
}

export default connect(null, { createPassenger })(CreatePassenger);