import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoFeedComponent from './videoFeed.component';

let videoFeedModule = angular.module('videoFeed', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('videoFeed', {
      url: '/',
      component: 'videoFeed'
    });
})
  
.component('videoFeed', videoFeedComponent)

.name;

export default videoFeedModule;
