import angular from 'angular';
import angularYoutubeEmbed from 'angular-youtube-embed';
import videoFeedItemComponent from './videoFeedItem.component';

const videoFeedItemModule = angular.module('videoFeedItem', [
  angularYoutubeEmbed
]);

videoFeedItemComponent.register(videoFeedItemModule);

export default videoFeedItemModule.name;
