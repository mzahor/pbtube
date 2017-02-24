import videoFeedItem from './videoFeedItem';

describe('videoFeedItem component', function() {
    let scope;
    let element;

    beforeEach(function() {
        angular.mock.module(videoFeedItem);

        angular.mock.inject(($compile, $rootScope) => {
            scope = $rootScope;
            scope.video = {
                title: 'Superman',
                views: 121
            };
            let jElement = angular.element(
                '<video-feed-item video="video"></video-feed-item>'
            );

            $compile(jElement)(scope);
            scope.$digest();
            element = jElement[0];
        });
    });

    it('should render template', function() {
        expect(element.querySelector('.video-feed-item')).to.be.truthy;
    });

    it('should render video title', function() {
        expect(element.querySelector('.video-title').innerText).to.equal('Superman');
    });

    it('should render video views count', function() {
        expect(element.querySelector('.video-views').innerText).to.equal('121 views');
    });

    it('should render video-player', function() {
        expect(element.querySelector('.video-player')).to.be.truthy;
    });

    function html() {
        return element.innerHTML;
    }
});
