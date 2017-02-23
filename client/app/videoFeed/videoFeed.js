import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoFeedItem from './videoFeedItem/videoFeedItem';
import videoPlayer from './videoPlayer/videoPlayer';
import videoFeedComponent from './videoFeed.component';
import videoFeedService from './videoFeed.service';

const videoFeedModule = angular.module('videoFeed', [
  uiRouter,
  videoFeedItem,
  videoPlayer
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('videoFeed', {
      url: '/',
      component: 'videoFeed'
    });
});
  
videoFeedComponent.register(videoFeedModule);
videoFeedService.register(videoFeedModule);

export default videoFeedModule.name;
