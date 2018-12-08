import reducer from '../../src/reducers/counter';
import { INCREMENT, DECREMENT } from '../../src/actions/counter';

// Tests for reducers
describe("counter reducers", () => {

    let startVariable = null;
    let initialState = {};

    beforeEach(() => {
        // eslint-disable-next-line no-magic-numbers
        startVariable = Math.floor(Math.random() * 100);
        initialState = {
            ...initialState,
            ...{ value: startVariable }
        };
    });


    it('should return the initial state', () => {
        // eslint-disable-next-line no-undefined
        expect(reducer(undefined, {})).toEqual({ value: 0 });
    });

    test("should handle INCREMENT", () => {
        // eslint-disable-next-line id-length,no-plusplus
        for (let i = 0; i <= startVariable; i++) {
            expect(
                // eslint-disable-next-line no-undefined
                reducer(initialState, { type: INCREMENT })
            ).toEqual(
                // eslint-disable-next-line no-magic-numbers
                { value: startVariable + 1 }
            );
        }
    });

    test("should handle DECREMENT", () => {
        // eslint-disable-next-line id-length,no-plusplus
        for (let i = 0; i <= startVariable; i++) {
            expect(
                // eslint-disable-next-line no-undefined
                reducer(initialState, { type: DECREMENT })
            ).toEqual(
                // eslint-disable-next-line no-magic-numbers
                { value: startVariable - 1 }
            );
        }
    });
});
