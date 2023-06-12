//where we will store our address book. Fake database model
//Business logic for Addressbook --------
function AddressBook() {
    this.contacts = {};
    this.currentId = 0; 
}

//these are methods for the AddressBook object
AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
};
//Assign contact ID starting from zero, +=1
AddressBook.prototype.assignId = function () {
    this.currentId +=1;
    return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id] !==undefined) {
        return this.contacts[id];
    }
    return false;
};

AddressBook.prototype.deleteContact = function(id) {
    if (this.contacts[id] === undefined) {
        return false; 
    }
    delete this.contacts[id];
    return true;
};
// Business Logic for Contacts ---------
//this is a function that names parameters. A Constructor
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.phoneNumber = phoneNumber; 
}

//this is a method for the Contact object
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName; 
};

//A guideline: if your variable is meant to represent a 
//potential database, a global variable is fine.

