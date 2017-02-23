import template from './videoFeedItem.html';
import './videoFeedItem.scss';

export class VideoFeedItemController {
  getTitle() {
    if (this.video.title) {
      return this.video.title;
    } else {
      return 'untitled'
    }
  }
}

export const videoFeedItemComponent = {
  restrict: 'E',
  bindings: {
    video: '<'
  },
  template,
  controller: VideoFeedItemController
};

export default {
  register(ngModule) {
    ngModule.component('videoFeedItem', videoFeedItemComponent);
  }
};
