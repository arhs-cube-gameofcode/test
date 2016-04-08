 'use strict';

angular.module('warriorsApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-warriorsApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-warriorsApp-params')});
                }
                return response;
            }
        };
    });
