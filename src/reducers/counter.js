import { INCREMENT, DECREMENT } from '../actions/counter';

const initialState = { value: 0 };

const counter = (state = initialState, action) => {
    const inc = 1;
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                value: state.value + inc
            };
        }

        case DECREMENT: {
            return {
                ...state,
                value: state.value - inc
            };
        }
        default:
            return state;
    }
};

export default counter;
