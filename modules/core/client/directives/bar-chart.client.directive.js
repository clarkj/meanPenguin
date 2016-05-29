(function() {
  'use strict';

  angular.module('core')
    .directive('barChart', ['d3Service',
      function(d3Service) {
        return {
          restrict: 'EA',
          scope: {},
          link: function(scope, element, attrs) {
            d3Service.d3().then(function(d3) {
              //All d3 code below

              var body = d3.select("body");
              var div = body.append("div");
              div.html("Hello, world!");


              //End d3Service function
            });
          }
        };
      }
    ]);
})();