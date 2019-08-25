import React from 'react';
import { connect } from 'react-redux';
import { fetchTicket, updateTicket, fetchFlights, fetchPassengers } from '../../redux/actions';
import TicketForm from '../../components/forms/ticketForm';

class UpdateTicket extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchTicket(id);
        this.props.fetchFlights();
        this.props.fetchPassengers();
    }

    onSubmit = formValues => {
        const { id } = this.props.match.params;
        this.props.updateTicket(id, formValues);
    }

    render() {
        const { ticket, flights, passengers } = this.props;

        if (!ticket)
            return <div>Loading...</div>;

        
        const { flight, passenger, seat } = ticket;
        const initialValues = {
            flight,
            passenger, 
            seat
        }
        console.log('flights >>>', flights);
        console.log('passengers >>>', passengers);
        return (
            <div>
                <h3>Update the Ticket</h3>
                <TicketForm 
                    onSubmit={this.onSubmit}
                    initialValues={initialValues}
                    flights={flights}
                    passengers={passengers}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ticket: state.tickets[ownProps.match.params.id],
        flights: state.flights,
        passengers: state.passengers
    };
};

export default connect(
    mapStateToProps,
    { 
        fetchTicket, 
        updateTicket, 
        fetchFlights, 
        fetchPassengers
    }
)(UpdateTicket);