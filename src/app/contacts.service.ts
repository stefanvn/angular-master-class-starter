import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data'
import { API_ENDPOINT } from './app.token';

interface ContactResponse  { item  : Contact    } 
interface ContactsResponse { items : Contact[]  } 


@Injectable()
export class ContactsService {

  private contacts: Array<Contact> = CONTACT_DATA
  
  constructor(private http: HttpClient, @Inject(API_ENDPOINT) private apiEndpoint) {}
  
  getContacts() {
    return this.http.get<ContactsResponse>(`${this.apiEndpoint}/api/contacts/`).pipe(map((data) => data.items));
  }

  getContact(id: string) {
    return this.http.get<ContactResponse>(`${this.apiEndpoint}/api/contacts/${id}`).pipe(map((data) => data.item));
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.apiEndpoint}/api/contacts/${contact.id}`, contact);
  }
}
