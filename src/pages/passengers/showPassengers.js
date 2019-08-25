import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPassengers } from '../../redux/actions'
import Passenger from '../../components/passenger';

class ShowPassengers extends React.Component {
    componentDidMount() {
        this.props.fetchPassengers();
    }

    renderList() {
        const { passengers } = this.props;

        return passengers.map(passenger => <Passenger passenger={passenger} />);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    {this.renderList()}
                </Container>
                <Create to={'/passengers/new'}>Create Passenger</Create>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ passengers }) => {
    return {
        passengers: Object.values(passengers)
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
    border-radius: 10px;
    box-shadow: 0 1px 3px 1px rgba(60,64,67, 0.15);

    &:hover {
    box-shadow: 0 2px 4px 2px rgba(60,64,67, 0.15);
    }
`;

export default connect(mapStateToProps, { fetchPassengers })(ShowPassengers);