import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteFlight } from '../redux/actions';
import Item from './item';

class Flight extends React.Component {
    render() {
        const {origin, destination, departureTime, arrivalTime, id} = this.props.flight;
        return (
            <Container>
                <Item rout={`flights/update/${id}`}>
                    <div>
                        <CustomH3>{origin}</CustomH3>
                        <ion-icon name="arrow-round-forward" />
                        <CustomH3>{destination}</CustomH3>
                    </div>
                    <CustomP>Ida: <SpanUI>{departureTime}</SpanUI></CustomP>
                    <CustomP>Volta: <SpanUI>{arrivalTime}</SpanUI></CustomP>
                </Item>
                <Delete onClick={() => this.props.deleteFlight(id)}>Delete</Delete>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;

const SpanUI = styled.span`
    color: rgba(0, 0, 0, 0.56);
`;

const CustomH3 = styled.span`
    font-size: 1.17em;
    font-weight: bold;
    margin: 5px 5px;
`;

const CustomP = styled.div`
    margin-left: 5px;
`;

const Delete = styled.button`
    color: #fff;
    background-color: #b80000;
    margin-right: 10px;
    border-radius: 10px;
    text-decoration: none;
    padding: 10px 15px;
`;

export default connect(null, { deleteFlight })(Flight);