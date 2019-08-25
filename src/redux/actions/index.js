import airport from '../../api/airport';
import history from '../../history';

export const createFlight = formValues => async dispatch => {
    const response = await airport.post('/flights', { ...formValues });

    dispatch({ type: 'CREATE_FLIGHT', payload: response.data });
    history.push('/');
}

export const fetchFlights = () => async dispatch => {
    const response = await airport.get('/flights');

    dispatch({ type: 'FETCH_FLIGHTS', payload: response.data });
};

export const fetchFlight = id => async dispatch => {
    const response = await airport.get(`/flights/${id}`);

    dispatch({ type: 'FETCH_FLIGHT', payload: response.data });
}

export const updateFlight = (id, formValues) => async dispatch => {
    const response = await airport.patch(`/flights/${id}`, formValues);

    dispatch({ type: 'UPDATE_FLIGHT', payload: response.data });
    history.push('/');
}

export const deleteFlight = id => async dispatch => {
    const response = await airport.delete(`/flights/${id}`);

    dispatch({ type: 'DELETE_FLIGHT', payload: id });
    history.push('/');
}

export const createPassenger = formValues => async dispatch => {
    const response = await airport.post('/passengers', { ...formValues });

    dispatch({ type: 'CREATE_PASSENGER', payload: response.data });
    history.push('/passengers');
}

export const fetchPassengers = () => async dispatch => {
    const response = await airport.get('/passengers');

    dispatch({ type: 'FETCH_PASSENGERS', payload: response.data });
};

export const fetchPassenger = id => async dispatch => {
    const response = await airport.get(`/passengers/${id}`);

    dispatch({ type: 'FETCH_PASSENGER', payload: response.data });
}

export const updatePassenger = (id, formValues) => async dispatch => {
    const response = await airport.patch(`/passengers/${id}`, formValues);

    dispatch({ type: 'UPDATE_PASSENGER', payload: response.data });
    history.push('/passengers');
}

export const deletePassenger = id => async dispatch => {
    const response = await airport.delete(`/passengers/${id}`);

    dispatch({ type: 'DELETE_PASSENGER', payload: id });
    history.push('/passengers');
}

export const createTicket = formValues => async dispatch => {
    const response = await airport.post('/tickets', { ...formValues });

    dispatch({ type: 'CREATE_TICKET', payload: response.data });
    history.push('/tickets');
}

const fetchPassengerName = async id  => {
    const response = await airport.get(`/passengers/${id}`);
    return response.data.name
}

export const fetchTickets = () => async dispatch => {
    const response = await airport.get('/tickets');
    

    dispatch({ type: 'FETCH_TICKETS', payload: response.data });
};

export const fetchTicket = id => async dispatch => {
    const response = await airport.get(`/tickets/${id}`);

    dispatch({ type: 'FETCH_TICKET', payload: response.data });
}

export const updateTicket = (id, formValues) => async dispatch => {
    const response = await airport.patch(`/tickets/${id}`, formValues);

    dispatch({ type: 'UPDATE_TICKET', payload: response.data });
    history.push('/tickets');
}

export const deleteTicket = id => async dispatch => {
    const response = await airport.delete(`/tickets/${id}`);

    dispatch({ type: 'DELETE_TICKET', payload: id });
    history.push('/tickets');
}
