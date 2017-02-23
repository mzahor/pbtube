import template from './videoFeed.html';
import './videoFeed.scss';

export class VideoFeedController {
  constructor(VideoFeedService) {
    'ngInject';

    this.name = 'Video Feed';
    this.VideoFeedService = VideoFeedService;
    this.init();
  }

  init() {
    this.VideoFeedService.loadFeed().then(() => {
      this.items = this.VideoFeedService.items;
    });
  }
}

export const videoFeedComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: VideoFeedController
};

export default {
  register(ngModule) {
    ngModule.component('videoFeed', videoFeedComponent);
  }
};
