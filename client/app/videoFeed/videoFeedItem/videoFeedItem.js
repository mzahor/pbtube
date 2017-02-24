import angular from 'angular';
import angularYoutubeEmbed from 'angular-youtube-embed';
import videoFeedItemComponent from './videoFeedItem.component';
import common from '../../common/common';

const videoFeedItemModule = angular.module('videoFeedItem', [
  angularYoutubeEmbed,
  common
]);

videoFeedItemComponent.register(videoFeedItemModule);

export default videoFeedItemModule.name;
