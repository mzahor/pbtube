import angular from 'angular';
import angularYoutubeEmbed from 'angular-youtube-embed';

import videoDirective from './video.directive';
import videoPlayerComponent from './videoPlayer.component';

const videoPlayerModule = angular.module('videoPlayer', [
  angularYoutubeEmbed
]);

videoPlayerComponent.register(videoPlayerModule);
videoDirective.register(videoPlayerModule);

export default videoPlayerModule.name;
