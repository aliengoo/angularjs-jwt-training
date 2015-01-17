(function () {
  'use strict';


  angular.module('app').controller('Home', Home);

  Home.$inject = ['randomUserService'];

  function Home(randomUserService) {
    var vm = this;

    vm.getRandomUser = getRandomUser;


    function getRandomUser() {
      console.log('clicked');
      vm.randomUser = randomUserService.get();
    };
  }

}());
