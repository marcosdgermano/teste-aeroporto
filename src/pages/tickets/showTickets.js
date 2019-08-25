import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTickets } from '../../redux/actions';
import Ticket from '../../components/ticket';

class ShowTickets extends React.Component {
    componentDidMount() {
        this.props.fetchTickets();
    }

    renderList() {
        const { tickets } = this.props;
        return tickets.map(ticket => <Ticket ticket={ticket} />);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    {this.renderList()}
                </Container>
                <Create to={'/tickets/new'}>Create Ticket</Create>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        tickets: Object.values(state.tickets)
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Create = styled(Link)`
    text-decoration: none;
    position: absolute;
    color: #fff;
    background-color: #0b91d2;
    padding: 10px 15px;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: 0 1px 3px 1px rgba(60,64,67, 0.15);

    &:hover {
        background-color: #076593;
    }
`;

export default connect(mapStateToProps, { fetchTickets })(ShowTickets);