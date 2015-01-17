(function () {
  'use strict';

  angular.module('app').factory('randomUserService', randomUserService);

  randomUserService.$inject = ['$resource', 'apiUrl'];

  function randomUserService($resource, apiUrl) {
    return $resource(apiUrl + 'random-user', {});
  }

}());
