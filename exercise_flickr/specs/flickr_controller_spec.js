// Write your tests here
// 1. You will want to instantiate the controller
// 2. Mock out the backend
// 3. Build your controller against scope
// 4. Flush the mock ajax response
// 5. Then check that $scope.feed is defined

describe('FlickrController', function() {

  beforeEach(module('app'));

  var controllerService, scope, httpBackend;
  beforeEach(inject(function($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    controllerService = $controller;
  }));

  describe('getting the weather', function() {

    var dummyResponse = {feed: []};

    beforeEach(function() {
      httpBackend.expectJSONP(/.*flickr.*/).respond(dummyResponse);
      // httpBackend.when("JSONP", /.*flickr.*/).respond(dummyResponse);
      controllerService('FlickrController', {$scope: scope});
      scope.getFeed()
      // scope.getFeed();
      httpBackend.flush();
    });

    it('should have weather', function() {
      expect(scope.feed).toEqual(dummyResponse);
    });
  });

});
