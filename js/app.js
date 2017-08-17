'use strict'

angular
 .module('wdi_radio', [
   'ui.router',
   'ngResource'
 ])
 .config([
   '$stateProvider',
   '$urlRouterProvider',
   RouterFunction
 ])
.factory('Songs', [
  '$resource',
  songsService
])
.controller('SongsIndexController', [
  'Songs',
  SongsIndexControllerFunction
])
function SongsIndexControllerFunction (Songs) {
  this.songs = Songs.query()
  console.log(this.songs)
}

function songsService ($resource) {
  return $resource('http://localhost:3000/songs/:id.json', {}, {
    update: {
      method: 'PUT'
    }
  })
}

function RouterFunction ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('homepage', {
    url: '/',
    templateUrl: 'js/ng-views/homepage.html'
  })
   .state('SongsIndex', {
     url: '/songs',
     templateUrl: 'js/ng-views/index.html',
     controller: 'SongsIndexController',
     controllerAs: 'vm'
   })
  $urlRouterProvider.otherwise('/')
}
