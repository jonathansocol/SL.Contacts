angular.module('contactsApp')
    .service('apiService', ['$http', function ($http) {

        var contacts;

       
        return {
            init: function (url) {
                return $http.get(url);
            },
            isInitialized: function () {
                return contacts != undefined && contacts != null && contacts.length > 0;
            },
            getContacts: function () {
                return contacts;
            },
            getContactById: function (id) {
                for (var i = 0; i < contacts.length; i++) {
                    if (contacts[i].id == id) {
                        return contacts[i];
                    }
                }
            },
            setContacts: function (list) {
                contacts = list;
            },
            updateContact: function (id) {
                
            }
        };
    }]);