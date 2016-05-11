'use strict';

describe('Controller: PantryCtrl', function () {

  // load the controller's module
  beforeEach(module('mspCookManagerClientApp'));

  var PantryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PantryCtrl = $controller('PantryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PantryCtrl.awesomeThings.length).toBe(3);
  });
});
