angular.module('contactsApp')
    .factory('ApiService', ['$http', 'APP_SETTINGS', function ($http, APP_SETTINGS) {
        return {
            getContacts: function () {
                return $http.get(APP_SETTINGS.serviceUrl);
            }
        };
    }]);