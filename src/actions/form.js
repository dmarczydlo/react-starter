import axios from 'axios';
const SEND_DATA_START = 'SEND_DATA_START';
const SEND_DATA_SUCCESS = 'SEND_DATA_SUCCESS';
const SEND_DATA_ERROR = 'SEND_DATA_ERROR';

const API_CALL = 'https://jsonplaceholder.typicode.com/posts';

const sendDataAPI = (nameValue, url = API_CALL) => {
    return (dispatch) => {
        dispatch({ type: SEND_DATA_START });
        return axios.post(url, { name: nameValue }).then(result => {
            const { name } = result.data;
            dispatch({
                data: {name},
                type: SEND_DATA_SUCCESS
            });
        }).
            catch(error => dispatch({
                error: error.response.status,
                type: SEND_DATA_ERROR
            }));
    };
};

export {
    SEND_DATA_ERROR,
    SEND_DATA_START,
    SEND_DATA_SUCCESS,
    sendDataAPI
};
