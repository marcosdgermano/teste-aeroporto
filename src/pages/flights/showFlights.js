import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFlights } from '../../redux/actions';
import Flight from '../../components/flight';

class ShowFlights extends React.Component {
    componentDidMount() {
        this.props.fetchFlights();
    }

    renderList() {
        const { flights } = this.props;

        return flights.map(flight => <Flight flight={flight} />);
    }

    render() {
        return (
            <React.Fragment>
                {this.renderList()}
                <Create to={'/flights/new'}>Create Flight</Create>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ flights }) => {
    return {
        flights: Object.values(flights)
    }
}

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

export default connect(mapStateToProps, { fetchFlights })(ShowFlights);