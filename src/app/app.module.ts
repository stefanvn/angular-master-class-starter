import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';
import { ContactsService } from './contacts.service';
import { RouterModule } from '@angular/router';

import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { APP_ROUTES } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { API_ENDPOINT } from './app.token';

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers:[
    ContactsService,
    { provide: API_ENDPOINT, useValue: "http://localhost:4201"}
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
