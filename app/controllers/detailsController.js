angular.module('contactsApp')
    .controller('detailsController', ['$scope', '$location', '$filter', 'apiService', function ($scope, $location, $filter, apiService) {

        var contactId = $location.search().id;

        $scope.contact = apiService.getContactById(contactId);

        //function getContactById (id) {
        //    $scope.contact = $filter('filter')($rootScope.contacts, { id: id })[0];
        //};   
    }]);