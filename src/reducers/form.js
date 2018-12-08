import { SEND_DATA_ERROR, SEND_DATA_START, SEND_DATA_SUCCESS } from '../actions/form';

const initialState = {
    data: {},
    error: '',
    name: '',
    sending: false
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case SEND_DATA_START: {
            return {
                ...state,
                data: {},
                sending: true
            };
        }

        case SEND_DATA_SUCCESS: {
            return {
                ...state,
                data: action.data,
                sending: false
            };
        }

        case SEND_DATA_ERROR: {
            return {
                ...state,
                data: {},
                error: action.error,
                sending: false
            };
        }

        default:
            return state;
    }
};

export default counter;
