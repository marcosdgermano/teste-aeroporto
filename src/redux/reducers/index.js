import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import flights from './flightsReducer';
import passengers from './passengersReducer';
import tickets from './ticketsReducer';

export default combineReducers({
    form: formReducer,
    flights,
    passengers,
    tickets
})