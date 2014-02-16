'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MyCtrl1', { $scope: scope });
 
      expect(scope.phones.length).toBe(3);
  }));

});
