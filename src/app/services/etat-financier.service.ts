import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IEtatFinancier } from '../models/etatFinancier';

@Injectable({
  providedIn: 'root'
})
export class EtatFinancierService  {
  private readonly url_api = "http://localhost:3000";
  constructor(
           private http:HttpClient
           ) { }

  
  public getEtatFinancier() : Observable<IEtatFinancier[]> {
    return this.http
    .get<IEtatFinancier[]>(this.url_api + "/EtatFinancier")
    .pipe(
    tap(client => console.log('Client :' +client)),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage!: string;
    if (error.status === 0) {
      console.error('An error occurred:', error.error.message);
      errorMessage = `An error occurred:, ${error.error.message}`;
       
    } else {
      console.error(
        `Backend returned code ${ error.status } `+
        `body was: ${ error.status }`);
        errorMessage = `Backend returned code ${ error.status }, ` +
        `body was: ${ error.status }`;
        
    }
    return throwError(() => new Error('Something bad happened; please try again later.' +
    errorMessage));
  }
}
