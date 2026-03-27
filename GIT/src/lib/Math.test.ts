import { Math } from "./Math.js";

describe("Calculator", () => {
    let calc: Math
    beforeEach(() => {
        calc = new Math()
    })

    it("should multiply two number correctly", () => {
        const response = calc.Multi(3,5);
        expect(response).toBe(15);
    })
})
