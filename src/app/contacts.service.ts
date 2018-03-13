import { Injectable } from '@angular/core';

import { Contact } from './models/contact';
import { CONTACTS } from './constacts-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ContactsService {
  contacs: Contact[] = CONTACTS

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of(this.contacs);
  }

  getContact(id: number): Observable<Contact>{
    return of(this.contacs.find((c) => c.id === id ));
  }

  addContact(name: string): Observable<Contact> {
    const id = Date.now();
    const newContact = {
      id,
      name
    };

    console.log('adding contact', name)

    this.contacs = [...this.contacs, newContact];

    return of(newContact);
  }

  updateContact(contact: Contact) {
    this.contacs = this.contacs.map(c => c.id === contact.id ? contact : c);

    return of(contact);
  }

  deleteContact(contactId: number) {
    console.log('deleting contact', contactId)
    this.contacs = this.contacs.filter(c => c.id !== contactId);

    return of(null);
  }

}
