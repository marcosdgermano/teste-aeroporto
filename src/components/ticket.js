import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteTicket } from '../redux/actions';
import Item from './item';

class Ticket extends React.Component {
    render() {
        const { flight_id, passenger_id, seat_number, id } = this.props.ticket;
        return (
            <Container>
                <Item rout={`tickets/update/${id}`}>
                    <div>
                        <h3>Flight Number: {flight_id}</h3>
                        <h4>Passenger: {passenger_id}</h4>
                        <h4>Seat: {seat_number}</h4>
                    </div>
                </Item>
                <Delete onClick={() => this.props.deleteTicket(id)}>Delete</Delete>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
`;

const Delete = styled.button`
    color: #fff;
    background-color: #b80000;
    margin-right: 10px;
    border-radius: 10px;
    text-decoration: none;
    padding: 10px 15px;
`;

export default connect(null, { deleteTicket })(Ticket);