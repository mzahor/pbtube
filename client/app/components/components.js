import angular from 'angular';
import VideoFeed from './videoFeed/videoFeed';

let componentModule = angular.module('app.components', [
  VideoFeed
])

.name;

export default componentModule;
