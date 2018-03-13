import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{

  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(){
    this.getContacts();
  }

  getContacts() {
    this.contactsService.getContacts()
      .subscribe((data) => this.contacts = data);
  }

  // onContactClick(contact: Contact) {
  //   this.selectContact.emit(contact);
  // }

  addContactBtnClick() {
    this.contactsService.addContact('Hello World!')
      .subscribe(() => this.getContacts());
  }

}
