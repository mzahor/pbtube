import angular from 'angular';
import angularYoutubeEmbed from 'angular-youtube-embed';
import videoFeedItemComponent from './videoFeedItem.component';

let videoFeedItemModule = angular.module('videoFeedItem', [
  angularYoutubeEmbed
])

.component('videoFeedItem', videoFeedItemComponent)

.name;

export default videoFeedItemModule;
