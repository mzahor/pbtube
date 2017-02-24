function humanizeNumberFilter() {
    return function(input) {
        return output;
    }
}

export default {
    register(ngModule) {
        ngModule.filter('humanizeNumber', humanizeNumberFilter);
    }
};
