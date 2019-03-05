import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts$: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) { }
  
  ngOnInit() {
    this.contacts$ = this.contactsService.getContacts();
  }

  trackById(index: number, contact: Contact) {
    return contact.id
  }

}
