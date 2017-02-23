import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoFeedItemComponent from './videoFeedItem.component';

let videoFeedItemModule = angular.module('videoFeedItem', [
  uiRouter
])

.component('videoFeedItem', videoFeedItemComponent)

.name;

export default videoFeedItemModule;
