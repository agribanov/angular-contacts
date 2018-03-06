import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { CONTACTS } from '../constacts-mock';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = []
  selectedContact: Contact = null

  constructor() { }

  ngOnInit() {
    this.contacts = CONTACTS;
  }

  onContactSelect(contact: Contact){
    this.selectedContact = contact;
  }

}
