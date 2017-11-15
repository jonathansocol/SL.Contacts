angular.module('contactsApp')
    .filter('telephone', function () {
        return function (input) {

            if (input == undefined || input == null || input == '') {
                return '-';
            }

            var phoneSections = input.split('-');
            var out = '(' + phoneSections[0] + ') ' + phoneSections[1] + '-' + phoneSections[2];

            return out;
        };
    });