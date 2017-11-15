angular.module('contactsApp')
    .controller('listController', ['$scope', '$location', '$filter', 'apiService', function ($scope, $location, $filter, apiService) {

        $scope.contacts = apiService.getContacts();

        $scope.displayContactDetails = function (key) {
            $location.path('/contactDetails').search({ id: key });
        };        
    }]);