import { DECREMENT, INCREMENT, updateValue } from '../../src/actions/counter';
import { mockStore } from '../__mocks__/store';

describe('async form actions', () => {
    it('creates INCREMENT when counter has been incremented', () => {
        const expectedActions = [{ type: INCREMENT }];
        const store = mockStore();
        store.dispatch(updateValue(INCREMENT));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates DECREMENT when counter has been decremented', () => {
        const expectedActions = [{ type: DECREMENT }];
        const store = mockStore();
        store.dispatch(updateValue(DECREMENT));
        expect(store.getActions()).toEqual(expectedActions);
    });

});
