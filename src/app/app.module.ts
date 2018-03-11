import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsService } from './contacts.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
