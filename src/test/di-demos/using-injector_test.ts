import { it, describe, expect, inject } from 'angular2/testing';
import { APP_ID } from 'angular2/core';

// A DI Token representing a unique string id assigned to the application by
// Angular and used primarily for prefixing application attributes and CSS
// styles when ViewEncapsulation is being used.
describe('default test injector', () => {
  it('should provide default id', inject([APP_ID], (id) => {
    expect(id).toBe('a');
  }));
});
