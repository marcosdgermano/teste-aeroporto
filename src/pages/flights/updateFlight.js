import React from 'react';
import { connect } from 'react-redux';
import { fetchFlight, updateFlight } from '../../redux/actions';
import FlightForm from '../../components/forms/flightForm';

class UpdateFlight extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchFlight(id);
    }

    onSubmit = formValues => {
        const { id } = this.props.match.params;
        this.props.updateFlight(id, formValues);
    }

    render() {
        const { flight } = this.props;

        if (!flight)
            return <div>Loading...</div>;

        
        const { origin, destination, departureTime, arrivalTime } = flight;
        const initialValues = {
            origin,
            destination, 
            departureTime,
            arrivalTime
        }

        return (
            <div>
                <h3>Update the Flight</h3>
                <FlightForm 
                    onSubmit={this.onSubmit}
                    initialValues={initialValues}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        flight: state.flights[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchFlight, updateFlight })(UpdateFlight);