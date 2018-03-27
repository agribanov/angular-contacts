import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) { }

  ngOnInit(){
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = +params.get('id');

        return this.contactsService.getContact(id)
          
      })
      .subscribe((data) => this.contact = data);
    
  }

}
