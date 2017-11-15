angular.module('contactsApp')
    .controller('detailsController', ['$scope', '$location', '$filter', 'apiService', function ($scope, $location, $filter, apiService) {

        var contactId = $location.search().id;
        $scope.contact = apiService.getContactById(contactId);

        $scope.navigateBack = function () {
            $location.search('id', null);
            $location.path('/contactList');
        }

        $scope.changeFavorite = function (value) {
            apiService.updateContact(contactId, value);
        }
    }]);