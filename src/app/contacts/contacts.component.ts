import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = []
  selectedContact: Contact = null

  constructor(private contacsService: ContactsService) { }

  ngOnInit() {
    this.getContacts()
  }

  getContacts() {
    this.contacsService.getContacts()
      .subscribe((data) => this.contacts = data);
  }

  onContactSelect(contact: Contact) {
    this.selectedContact = contact;
  }

  onContactAdd(contactName: string) {
    this.contacsService.addContact(contactName)
      .subscribe(() => this.getContacts());
  }

  onContactUpdate(contact: Contact) {
    this.contacsService.updateContact(contact)
      .subscribe(() => this.getContacts());

    this.selectedContact = null;
  }

  onContactDelete(contact: Contact) {
    this.contacsService.deleteContact(contact.id)
      .subscribe(() => this.getContacts());

    this.selectedContact = null;
  }

}
