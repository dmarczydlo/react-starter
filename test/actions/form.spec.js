import { fetchMock, mockStore } from '../__mocks__/store';
import {
    SEND_DATA_ERROR, SEND_DATA_START, SEND_DATA_SUCCESS, sendDataAPI
} from '../../src/actions/form';

describe('async form actions', () => {

    let name = '';
    afterEach(() => {
        fetchMock.restore();
    });

    beforeEach(() => {
        name = 'abcd';
    });

    it('creates SEND_DATA_SUCCESS when send data has been done', () => {

        fetchMock.postOnce('/send', {
            body: { name },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: SEND_DATA_START },
            {
                data: {
                    id: 101,
                    name
                },
                type: SEND_DATA_SUCCESS
            }
        ];
        const store = mockStore({ name: '' });

        return store.dispatch(sendDataAPI(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates SEND_DATA_ERROR when send data has been failed', () => {

        const URL = 'https://jsonplaceholder.typicode.com/abc';

        fetchMock.post('/send', { throws: { error: 404 } });

        const expectedActions = [
            { type: SEND_DATA_START },
            {
                error: 404,
                type: SEND_DATA_ERROR
            }
        ];

        const store = mockStore({ name: '' });

        return store.dispatch(sendDataAPI(name, URL)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});
