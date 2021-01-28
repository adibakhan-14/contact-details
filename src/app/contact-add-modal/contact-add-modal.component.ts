import { Component, OnInit } from '@angular/core';
//import { AsyncService } from 'src/app/shared/async.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-contact-add-modal',
  templateUrl: './contact-add-modal.component.html',
  styleUrls: ['./contact-add-modal.component.css']
})
export class ContactAddModalComponent implements OnInit {
  formId = 'contactFrom'
  constructor(
    //public asyncService: AsyncService,
    public form: FormGroup,
  ) { }

  addContact(){}



  ngOnInit(): void {
  }
  async onSubmit({ type, quantity, length,weight,cbm, ...data }: any):  Promise<void> {

    console.log('what is data here',data);







    if (this.form.valid) {
      console.log("hellloooo");





    }
  }

}
