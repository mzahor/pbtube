class VideoFeedItemController {
  constructor() {
    this.name = 'videoFeedItem';
  }

  getTitle() {
    if (this.video.title) {
      return this.video.title;
    } else {
      return 'untitled'
    }
  }

  getViews() {
    return this.video.views
  }

  getVideoId() {
    return this.video.videoId;
  }
}

export default VideoFeedItemController;
