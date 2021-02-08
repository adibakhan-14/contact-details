
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API: string = 'http://localhost:4300/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  addContact(data: Contact): Observable<any> {
    let API_URL = `${this.REST_API}/add-contact`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  getContacts(){
    return this.httpClient.get(`${this.REST_API}/contact-detail`);
  }

  // getContact(id:any): Observable<any> {
  //   let API_URL = `${this.REST_API}/contact-detail/${id}`;
  //   return this.httpClient.get(API_URL, { headers: this.httpHeaders })
  //     .pipe(map((res: any) => {
  //         return res || {}
  //       }),
  //       catchError(this.handleError)
  //     )
  // }




  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


