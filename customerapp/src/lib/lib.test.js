import filter from './lib';

describe("testing lib", () => {
    it("testing filter even numbers", () => {
        let predicateCb = jest.fn(e => e % 2 === 0);
        let data = [1, 4, 5, 9, 2];
        let result = filter(data, predicateCb);
        expect(result[0]).toBe(4);
        expect(result.length).toBe(2);
        expect(predicateCb).toBeCalledTimes(5);
    });
});