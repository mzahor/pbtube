export default function videoDirective() {
    return {
        restrict: 'E',
        scope: {
            src: '<'
        },
        template: '<div class="html5video"></div>',
        link: function (scope, element) {
            scope.element = element[0];
        },
        controller: function ($scope) {
            'ngInject';
            $scope.$watch('src', function (newValue) {
                if (!newValue) {
                    return;
                }

                let video = document.createElement('video');
                $scope.element.appendChild(video);
                video.src = newValue;
                video.controls = true;
            })
        }
    }
}