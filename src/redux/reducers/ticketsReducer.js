import { mapKeys, omit } from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_TICKET':
            return { ...state, [action.payload.id]: action.payload };
        case 'FETCH_TICKETS':
            return { ...state, ...mapKeys(action.payload, 'id') };
        case 'FETCH_TICKET':
            return { ...state, [action.payload.id]: action.payload };
        case 'UPDATE_TICKET':
            return { ...state, [action.payload.id]: action.payload };
        case 'DELETE_TICKET':
            return omit(state, action.payload);
        default:
            return state;
    }
}