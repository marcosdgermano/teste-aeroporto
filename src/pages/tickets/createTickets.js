import React from 'react';
import { connect } from 'react-redux';
import { createTicket, fetchFlights, fetchPassengers } from '../../redux/actions';
import TicketForm from '../../components/forms/ticketForm';

class CreateTicket extends React.Component {
    componentDidMount() {
        this.props.fetchFlights();
        this.props.fetchPassengers();
    }

    onSubmit = (formValues) => {
        this.props.createTicket(formValues);
    }

    render () {
        const { flights, passengers } = this.props;

        if (!flights || !passengers)
            return <div>Loading...</div>;

        console.log('>>> render', flights);
        return (
            <div>
                <h3>Create a Ticket</h3>
                <TicketForm onSubmit={this.onSubmit} flights={flights} passengers={passengers} />
            </div>
        ); 
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        flights: state.flights,
        passengers: state.passengers,
    };
}; 

export default connect(mapStateToProps, { createTicket, fetchFlights, fetchPassengers })(CreateTicket);