var testing_1 = require('angular2/testing');
var angular2_1 = require('angular2/angular2');
testing_1.describe('default test injector', function () {
    testing_1.it('should provide default id', testing_1.inject([angular2_1.APP_ID], function (id) {
        testing_1.expect(id).toBe('a');
    }));
});
//# sourceMappingURL=using-injector_test.js.map