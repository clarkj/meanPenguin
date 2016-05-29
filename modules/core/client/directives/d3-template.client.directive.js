(function() {
  'use strict';

  angular.module('core')
    .directive('d3TestChart', ['$window', '$timeout', 'd3Service',
      function($window, $timeout, d3Service) {
        return {
          restrict: 'EA',
          scope: {},
          link: function(scope, element, attrs) {
            d3Service.d3().then(function(d3) {
              //All d3 code here
                      
              //end d3 code
            });
          }
        };
      }
    ]);
})();