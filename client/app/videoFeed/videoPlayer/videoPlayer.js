import angular from 'angular';
import angularYoutubeEmbed from 'angular-youtube-embed';
import videoDirective from './video.directive';

let videoPlayerModule = angular.module('videoPlayer', [
  angularYoutubeEmbed
])

.directive('html5Video', videoDirective)

.name;

export default videoPlayerModule;
