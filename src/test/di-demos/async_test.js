describe('async tests', function () {
    it('usually need to signal that execution has been finished', function (done) {
        setTimeout(function () {
            expect(true).toBe(true);
            done();
        }, 500);
    });
});
//# sourceMappingURL=async_test.js.map