import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data'

@Injectable()
export class ContactsService {

  private contacts: Array<Contact> = CONTACT_DATA

  constructor() {}
  
  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: string) {
    return this.contacts.find(contact => contact.id.toString() === id);
  }
}
