angular.module('contactsApp')
    .filter('address', function () {
        return function (input) {

            if (input == undefined || input == null || input.length == 0) {
                return '-';
            }

            var fullAddress = '%s %s %s, %s, %s'
                .format(
                    input.street || '',
                    input.city || '',
                    input.state || '',
                    input.zipCode || '',
                    input.country || ''
                )

            return fullAddress;
        };
    });