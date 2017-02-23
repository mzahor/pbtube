import template from './app.html';
import './app.scss';

const appComponent = {
  template,
  restrict: 'E'
};

export default {
  register(ngModule) {
    ngModule.component('app', appComponent);
  }
};
