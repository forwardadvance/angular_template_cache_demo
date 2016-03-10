// Starting point for the Flickr JSONP exercise

// Inject $http into your controller
// Use it to issue a $http.jsonp() request
// In the callback, get the response and save it to $scope
// Write a template to iterate over the responses and output them using ng-repeat

// Extension
// Allow the user to search by tag

angular.module('app', []);

(function() {

  angular.module('app')
    .controller('FlickrController', FlickrController)

  function FlickrController($scope, $http) {
    $scope.getFeed = function() {
      $scope.status = "loading...";
      $http.jsonp(tagUrl($scope.tag))
        .then(function(response) {
          $scope.feed = response.data
          delete($scope.status);
        })
        .catch(function() {
          $scope.status = "failed";
        });
    }
  }

  function tagUrl(tag) {
    return [
      'http://api.flickr.com/services/feeds/photos_public.gne',
      '?tags=',
      tag,
      '&tagmode=any',
      '&format=json',
      '&jsoncallback=JSON_CALLBACK'
    ].join('')
  }

})();

