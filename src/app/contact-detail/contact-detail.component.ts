import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  Contacts: any = [];
  constructor( private contactService: ContactService ) { }

  ngOnInit(): void {

      this.contactService.getContacts().subscribe(res => {
        console.log(res)
        this.Contacts =res;
      });
  }

  }



