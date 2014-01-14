app = angular.module("MyApp", [])

MyCtrl = ($scope)->
    $scope.name = ""

    $scope.$watch("name",(newValue, oldValue)->
        if ($scope.name.length > 0)
            $scope.greeting = "Hi! #{$scope.name}"
    )

app.directive('show', ()->
    link: (scope, el, attrs) ->
        scope.$watch(attrs.show, (value)->
            el.css('display', if value then '' else 'none')
        )
)
