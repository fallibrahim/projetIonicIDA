import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IClient } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly url_api = "http://localhost:3000";
  constructor(
           private http:HttpClient
           ) { }

  
  public getClient() : Observable<IClient[]> {
    return this.http
    .get<IClient[]>(this.url_api + "/Client")
    .pipe(
    tap(client => console.log('Client :' +client)),
    catchError(this.handleError));
  }

  public getOneClientById(id:number): Observable <IClient> {
    return this.http
    .get<IClient>(this.url_api + '/Client/'+ id)
    .pipe(
      catchError(this.handleError)
    )
  }

  public createClient(client:IClient) : Observable<IClient> {
    return this.http
    .post<IClient>(this.url_api + "/Client",client)
    .pipe(catchError(this.handleError));
  }

  public deleteClient(id:any) {
    return this.http
    .delete<IClient>(this.url_api + '/Client/'+ id)
    .pipe(
      catchError(this.handleError));
  }
 
  public updateClient(id:any,client:any) : Observable<IClient>{
    return this.http
    .put<IClient>(this.url_api + '/Client/'+ id, client)
    .pipe(
        catchError(this.handleError)
    );
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
