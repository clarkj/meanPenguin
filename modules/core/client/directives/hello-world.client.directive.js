(function () {
  'use strict';

  angular
    .module('core')
    .directive('helloWorld', helloWorld);

  helloWorld.$inject = [/*Example: '$state', '$window' */];

  function helloWorld(/*Example: $state, $window */) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Hello world directive logic
        // ...

        element.text('this is the helloWorld directive, please work with me');
      }
    };
  }
})();
