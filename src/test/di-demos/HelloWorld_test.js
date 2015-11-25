describe("A suite", function () {
    var number;
    beforeEach(function () {
        number = 1 + Math.random();
    });
    it("contains spec with an expectation", function () {
        expect(number).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=HelloWorld_test.js.map