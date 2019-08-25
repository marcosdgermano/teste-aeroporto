import { mapKeys, omit } from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_PASSENGER':
            return { ...state, [action.payload.id]: action.payload };
        case 'FETCH_PASSENGERS':
            return { ...state, ...mapKeys(action.payload, 'id') };
        case 'FETCH_PASSENGER':
            return { ...state, [action.payload.id]: action.payload };
        case 'UPDATE_PASSENGER':
            return { ...state, [action.payload.id]: action.payload };
        case 'DELETE_PASSENGER':
            return omit(state, action.payload);
        default:
            return state;
    }
}