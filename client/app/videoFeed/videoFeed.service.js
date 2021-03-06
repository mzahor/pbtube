export class VideoFeedService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    loadFeed() {
        return this.$http.get('https://cdn.playbuzz.com/content/feed/items')
            .then(response => {
                this.items = response.data.items;
            })
    }
}

export default {
    register(ngModule) {
        ngModule.service('VideoFeedService', VideoFeedService);
    }
}