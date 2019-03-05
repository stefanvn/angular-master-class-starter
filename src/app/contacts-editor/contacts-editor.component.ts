import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  private contact$: Observable<Contact>;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.contact$ = this.contactsService.getContact(id);
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact)
                        .subscribe(() => this.goToDetails(contact));
  }

  goToDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }
}
