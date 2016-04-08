'use strict';

angular.module('warriorsApp')
    .controller('TagDetailController', function ($scope, $rootScope, $stateParams, entity, Tag) {
        $scope.tag = entity;
        $scope.load = function (id) {
            Tag.get({id: id}, function(result) {
                $scope.tag = result;
            });
        };
        var unsubscribe = $rootScope.$on('warriorsApp:tagUpdate', function(event, result) {
            $scope.tag = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
