function humanizeNumberFilter() {
    return function(input) {
        if (input < 1000) {
          return String(input);
        }
    }
}

export default {
    register(ngModule) {
        ngModule.filter('humanizeNumber', humanizeNumberFilter);
    }
};
