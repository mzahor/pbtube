export default class VideoFeedService {
    constructor($http) {
        "ngInject";
        this.$http = $http;
    }

    loadFeed() {
        return this.$http.get('https://cdn.playbuzz.com/content/feed/items')
            .then(response => {
                this.items = response.data.items;
                console.log(this.items);
            })
    }
}