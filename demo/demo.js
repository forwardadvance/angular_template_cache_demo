// demo ng-include
// include a header and a footer
// text/ng-template
// templates module
// We can use a run block to execute functions on load
// $templateCache.put

angular.module('app', ['templates'])

angular.module('templates', [])
  .run(function($templateCache) {
    $templateCache.put('cached-template', [
      '<p>',
        'Hello from the cache',
      '</p>'
    ].join(''))
  });

// "<h1>Hello from the cached template</h1>"


















// Initial state
// angular.module('app', ['templates'])

// angular.module('templates', [])
//   .run(function() {

//   });
