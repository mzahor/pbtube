import template from './videoFeedItem.html';
import controller from './videoFeedItem.controller';
import './videoFeedItem.scss';

let videoFeedItemComponent = {
  restrict: 'E',
  bindings: {
    video: '<'
  },
  template,
  controller
};

export default videoFeedItemComponent;
