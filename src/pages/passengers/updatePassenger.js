import React from 'react';
import { connect } from 'react-redux';
import { fetchPassenger, updatePassenger } from '../../redux/actions';
import PassengerForm from '../../components/forms/passengerForm';

class UpdatePassenger extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPassenger(id);
    }

    onSubmit = formValues => {
        const { id } = this.props.match.params;
        this.props.updatePassenger(id, formValues);
    }

    render() {
        const { passenger } = this.props;

        if (!passenger)
            return <div>Loading...</div>;

        
        const { name, gender } = passenger;
        const initialValues = {
            name,
            gender
        }

        return (
            <div>
                <h3>Update the Passenger</h3>
                <PassengerForm 
                    onSubmit={this.onSubmit}
                    initialValues={initialValues}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        passenger: state.passengers[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchPassenger, updatePassenger })(UpdatePassenger);