angular.module('contactsApp', [
    'ngRoute'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/contactList' });
    }]);
