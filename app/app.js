angular.module('contactsApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider, apiService) {
        $routeProvider.when('/contactList', {
            templateUrl: 'views/listView.html',
            controller: 'listController',
            resolve: {
                preload: function (apiService) {
                    if (apiService.isInitialized()) {
                        return true;
                    }

                    return apiService.init('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
                        .success(function (response) {
                            apiService.setContacts(response);
                        });
                }
            }
        });
        $routeProvider.when('/contactDetails', {
            templateUrl: 'views/detailsView.html',
            controller: 'detailsController'
        });
        $routeProvider.otherwise({ redirectTo: '/contactList' });
    }]).run(function ($rootScope, $location, apiService) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (!apiService.isInitialized()) {
                $location.search('id', null);
                $location.path("/contactList");
            }            
        });
    });
