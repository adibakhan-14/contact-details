import { Component } from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ContactAddModalComponent} from './contact-add-modal/contact-add-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'contact-details-project';

  constructor(
    public sharedServices: SharedModule,
    public dialog: MatDialog
  ){}


  createContact(): void {
    const dialogRef = this.dialog.open(ContactAddModalComponent, {
      width: '800px',
      height: '600px'

    });

    dialogRef.afterClosed().subscribe((result) => {

    });
  }

  showDetails(){}

}

