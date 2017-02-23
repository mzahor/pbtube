class VideoFeedController {
  constructor(videoFeedService) {
    "ngInject";

    this.name = 'Video Feed';
    this.videoFeedService = videoFeedService;
    this.init();
  }

  init() {
    this.videoFeedService.loadFeed().then(() => {
      this.items = this.videoFeedService.items;
    });
  }
}

export default VideoFeedController;
