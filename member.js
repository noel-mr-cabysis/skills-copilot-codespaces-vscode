function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: 'member.html',
        link: function(scope, element, attrs) {
            scope.showSkills = false;
            scope.toggleSkills = function() {
                scope.showSkills = !scope.showSkills;
            };
        }
    }
}