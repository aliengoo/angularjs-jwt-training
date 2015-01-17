(function () {
  'use strict';

  angular.module('app').factory('userService', userService);

  userService.$inject = ['$resource', 'apiUrl', 'authTokenService'];

  function userService($resource, apiUrl, authTokenService) {

    var r = $resource(apiUrl + 'user', {},{
      login : {
        method : 'POST'
      }
    });

    var exports = {
      login : login,
      logout : logout
    };

    return exports;

    function login(username, password) {
      return r.login({
        username : username,
        password : password
      });
    }

    function logout() {
      authTokenService.set();
    }
  }

}());
