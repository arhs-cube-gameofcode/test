'use strict';

angular.module('warriorsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


