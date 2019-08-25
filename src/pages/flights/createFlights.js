import React from 'react';
import { connect } from 'react-redux';
import { createFlight } from '../../redux/actions';
import FlightForm from '../../components/forms/flightForm';

class CreateFlight extends React.Component {
    onSubmit = (formValues) => {
        this.props.createFlight(formValues);
    }

    render () {
        return (
            <div>
                <h3>Create a Flight</h3>
                <FlightForm onSubmit={this.onSubmit} />
            </div>
        ); 
    }
}

export default connect(null, { createFlight })(CreateFlight);