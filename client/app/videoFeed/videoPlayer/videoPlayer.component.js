import template from './videoPlayer.html';

export class VideoPlayerController {
  getFacebookUrl() {
    return 'https://www.facebook.com/facebook/videos/' + this.video.videoId;
  }
}

export const videoPlayerComponent = {
  restrict: 'E',
  bindings: {
    video: '<'
  },
  template,
  controller: VideoPlayerController
};

export default {
    register(ngModule) {
        ngModule.component('videoPlayer', videoPlayerComponent)
    }
};
