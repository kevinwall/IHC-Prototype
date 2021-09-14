angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('fRuns', {
    url: '/foruns',
    templateUrl: 'templates/fRuns.html',
    controller: 'fRunsCtrl'
  })

  .state('fRuns2', {
    url: '/foruns/professores',
    templateUrl: 'templates/fRuns2.html',
    controller: 'fRuns2Ctrl'
  })

  .state('fRuns3', {
    url: '/forum/added',
    templateUrl: 'templates/fRuns3.html',
    controller: 'fRuns3Ctrl'
  })

  .state('fRum1', {
    url: '/forum/1',
    templateUrl: 'templates/fRum1.html',
    controller: 'fRum1Ctrl'
  })

  .state('seO1', {
    url: '/secao/1',
    templateUrl: 'templates/seO1.html',
    controller: 'seO1Ctrl'
  })

  .state('seO12', {
    url: '/secao/1/duvida',
    templateUrl: 'templates/seO12.html',
    controller: 'seO12Ctrl'
  })

  .state('seO13', {
    url: '/secao/1/file',
    templateUrl: 'templates/seO13.html',
    controller: 'seO13Ctrl'
  })

  .state('chatPrivadoComKaguya', {
    url: '/chat/1',
    templateUrl: 'templates/chatPrivadoComKaguya.html',
    controller: 'chatPrivadoComKaguyaCtrl'
  })

  .state('chatPrivadoComMiko', {
    url: '/chat/2',
    templateUrl: 'templates/chatPrivadoComMiko.html',
    controller: 'chatPrivadoComMikoCtrl'
  })

  .state('criarNovoFRum', {
    url: '/create/forum',
    templateUrl: 'templates/criarNovoFRum.html',
    controller: 'criarNovoFRumCtrl'
  })

  .state('fRum4', {
    url: '/forum/4/professores',
    templateUrl: 'templates/fRum4.html',
    controller: 'fRum4Ctrl'
  })

  .state('fRum42', {
    url: '/forum/4/professores/secteste',
    templateUrl: 'templates/fRum42.html',
    controller: 'fRum42Ctrl'
  })

  .state('criarNovaSeO', {
    url: '/create/secao',
    templateUrl: 'templates/criarNovaSeO.html',
    controller: 'criarNovaSeOCtrl'
  })

$urlRouterProvider.otherwise('/foruns')


});