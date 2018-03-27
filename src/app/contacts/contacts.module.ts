import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsService } from './contacts.service';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'contacts', component: ContactsListComponent},
  { path: 'contact/:id', component: ContactDetailsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent,
  ],
  providers: [ContactsService],
})
export class ContactsModule { }
