function videoDirective() {
    return {
        restrict: 'E',
        scope: {
            src: '<'
        },
        template: '<div class="html5video"></div>',
        link(scope, element) {
            scope.element = element[0];
        },
        controller($scope) {
            'ngInject';
            $scope.$watch('src', function (newValue) {
                if ($scope.videoEl) {
                    $scope.element.removeChild($scope.videoEl);
                }

                if (!newValue) {
                    return;
                }

                const video = document.createElement('video');
                video.src = newValue;
                video.controls = true;

                $scope.videoEl = video;
                $scope.element.appendChild(video);
            })
        }
    }
}

export default {
    register(ngModule) {
        ngModule.directive('html5Video', videoDirective);
    }
}