function humanizeNumberFilter() {
    return function(input) {
        if (input < 1000) {
          return String(input);
        }
        if (input >= 1000 && input < 999500) {
          return String(Math.round(input / 100) / 10) + 'K';
        }
        if (input >= 999500) {
          return String(Math.round(input / 100000) / 10) + 'M';
        }
    }
}

export default {
    register(ngModule) {
        ngModule.filter('humanizeNumber', humanizeNumberFilter);
    }
};
