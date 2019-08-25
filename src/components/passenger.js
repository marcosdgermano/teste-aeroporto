import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deletePassenger } from '../redux/actions';
import Item from './item';

class Passenger extends React.Component {
    render() {
        const { name, gender, id } = this.props.passenger;

        return (
            <Container>
                <Item rout={`passengers/update/${id}`}>
                    <div>
                        <h3>Name: {name}</h3>
                        <h4>Gender: {gender}</h4>
                    </div>
                </Item>
                <Delete onClick={() => this.props.deletePassenger(id)}>Delete</Delete>
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

export default connect(null, { deletePassenger })(Passenger);