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

  getVideoSource() {
    return this.video.source;
  }

  getVideoId() {
    return this.video.videoId;
  }

  getVideoUrl() {
    return 'https://www.facebook.com/facebook/videos/' + this.video.videoId;
  }
}

export default VideoFeedItemController;
