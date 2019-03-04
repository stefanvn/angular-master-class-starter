import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  
  contacts: Array<Contact>;

  constructor(private contactsService: ContactsService) {}

  trackById(index: number, contact: Contact) {
    return contact.id
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    console.log(this.contacts);
  }
}
