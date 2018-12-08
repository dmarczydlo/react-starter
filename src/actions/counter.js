const INCREMENT = "INCREMENT";
const DECREMENT = 'DECREMENT';

const updateValue = type => {
    return (dispatch) => {
        dispatch({ type });
    };
};

export {
    DECREMENT,
    INCREMENT,
    updateValue
};
