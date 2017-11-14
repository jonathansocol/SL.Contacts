angular.module('contactsApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contactList', {
            templateUrl: 'views/listView.html',
            controller: 'listController'
        });
        $routeProvider.when('/contactDetails', {
            templateUrl: 'views/detailsView.html',
            controller: 'listController'
        });
    }])
    .controller('listController', ['$scope', '$rootScope', '$location', '$filter', 'ApiService', function ($scope, $rootScope, $location, $filter, apiService) {

        if ($rootScope.contacts == undefined || $rootScope.contacts == null || $rootScope.contacts.length == 0) {
            getContacts();
        }

        function getContacts () {
            apiService.getContacts()
                .success(function (response) {
                    $rootScope.contacts = response;
                });
        }

        $scope.displayContactDetails = function (key) {
            $location.path('/contactDetails').search({ id: key });
        };

        $scope.getContactById = function (id) {
            return object_by_id = $filter('filter')($scope.contacts, { id: id })[0];
        };
    }]);