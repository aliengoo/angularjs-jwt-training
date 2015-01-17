(function () {
  'use strict';


  angular.module('app').controller('Login', Login);

  Login.$inject = ['$log', '$state', 'userService', 'authTokenService'];

  function Login($log, $state, userService, authTokenService) {
    var vm = this;

    vm.login = login;
    vm.logout = logout;

    function login(username, password) {
      userService.login(
        username, password).$promise.then(function (response) {
          authTokenService.set(response.token);
          vm.user = response.user;

          $state.go('home');
        }, function (error) {
          $log.error(error);
        });
    }

    function logout() {
      userService.logout();

      vm.user = null;
    }
  }

}());
