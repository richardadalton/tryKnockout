function ContactsViewModel() {
    // Data
    var self = this;

    self.contacts = [
        {
            "url": "https://com-devjoy-contactsapi.herokuapp.com/contacts/2/",
            "id": 2,
            "owner": "admin",
            "first_name": "richard",
            "last_name": "dalton",
            "email": "richard@example.com"
        },
        {
            "url": "https://com-devjoy-contactsapi.herokuapp.com/contacts/3/",
            "id": 3,
            "owner": "admin",
            "first_name": "Yoni",
            "last_name": "Lavi",
            "email": "yoni@example.com"
        },
        {
            "url": "https://com-devjoy-contactsapi.herokuapp.com/contacts/4/",
            "id": 4,
            "owner": "admin",
            "first_name": "Billy",
            "last_name": "Bob",
            "email": "billy@example.com"
        },
        {
            "url": "https://com-devjoy-contactsapi.herokuapp.com/contacts/11/",
            "id": 11,
            "owner": "admin",
            "first_name": "Rory",
            "last_name": "McIlroy",
            "email": "rory@example.com"
        },
        {
            "url": "https://com-devjoy-contactsapi.herokuapp.com/contacts/13/",
            "id": 13,
            "owner": "admin",
            "first_name": "Katie",
            "last_name": "Maxwell",
            "email": "katie@example.com"
        },
        {
            "url": "https://com-devjoy-contactsapi.herokuapp.com/contacts/161/",
            "id": 161,
            "owner": "admin",
            "first_name": "sandy",
            "last_name": "handy",
            "email": "sandy@example.com"
        }
    ];
};

ko.applyBindings(new ContactsViewModel());