import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AsyncService } from 'src/app/shared/async.service';
import { Observable } from 'rxjs';
import {Contact} from '../service/contact';
import {ContactService } from '../service/contact.service';
import { tap } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';






@Component({
  selector: 'app-contact-add-modal',
  templateUrl: './contact-add-modal.component.html',
  styleUrls: ['./contact-add-modal.component.css']
})
export class ContactAddModalComponent implements OnInit {
  contactForm: FormGroup;
  user: Observable<Contact>;


  constructor(
    //public asyncService: AsyncService,
    private formBuilder: FormBuilder,

    public dialogRef: MatDialogRef<ContactAddModalComponent>,
    private contactService: ContactService



  ) {}







  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      company: ['', Validators.required],

      email: ['', Validators.required],
      phone: ['', Validators.required]

    });


  }


  onSubmit(){
    if(this.contactForm.valid){
    console.log(this.contactForm.value);
    }

    this.contactService.addContact(this.contactForm.value).subscribe((isAdded) => {
      if(isAdded){
      console.log('Data added successfully!');
      this.close();
      } else{
        console.log("ERROR!!");

      }

    })


  }
  close = (): void => {
    this.dialogRef.close();
  };








}


