import { mapKeys, omit } from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_FLIGHT':
            return { ...state, [action.payload.id]: action.payload };
        case 'FETCH_FLIGHTS':
            return { ...state, ...mapKeys(action.payload, 'id') };
        case 'FETCH_FLIGHT':
            return { ...state, [action.payload.id]: action.payload };
        case 'UPDATE_FLIGHT':
            return { ...state, [action.payload.id]: action.payload };
        case 'DELETE_FLIGHT':
            return omit(state, action.payload);
        default:
            return state;
    }
}