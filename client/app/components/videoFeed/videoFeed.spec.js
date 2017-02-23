import VideoFeedModule from './videoFeed'
import VideoFeedController from './videoFeed.controller';
import VideoFeedComponent from './videoFeed.component';
import VideoFeedTemplate from './videoFeed.html';

describe('VideoFeed', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VideoFeedModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VideoFeedController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(VideoFeedTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VideoFeedComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VideoFeedTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VideoFeedController);
      });
  });
});
