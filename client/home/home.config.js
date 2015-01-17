(function () {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('home', {
      url : '/home',
      templateUrl : 'home/home.html',
      controller : 'Home as vm'
    });
  }

}());
