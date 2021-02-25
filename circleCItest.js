const sum = require('./circleCI');
const assert = require('chai').assert;

describe("Integrating CI with github", test)

function test() {

    it("Should return a number", () => {
        assert.isNumber(sum, "Return value should be a number")
    });

    it("Return a number greater than 10", () => {
        assert.isAtLeast(sum, 10, "Result should be greater than 10. Try Again!!!");
    });
}