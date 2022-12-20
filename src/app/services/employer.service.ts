import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IEmployer } from '../models/employer';
@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private readonly url_api = "http://localhost:3000";
  constructor(
           private http:HttpClient
           ) { }

  
  public getEmployer() : Observable<IEmployer[]> {
    return this.http
    .get<IEmployer[]>(this.url_api + "/Employer")
    .pipe(
    tap(employer => console.log('Employer :' +employer)),
    catchError(this.handleError));
  }

  public getOneEmployerById(id:number): Observable <IEmployer> {
    return this.http
    .get<IEmployer>(this.url_api + '/Employer/'+ id)
    .pipe(
      catchError(this.handleError)
    )
  }

  public createEmployer(employer:IEmployer) : Observable<IEmployer> {
    return this.http
    .post<IEmployer>(this.url_api + "/Employer",employer)
    .pipe(catchError(this.handleError));
  }

  public deleteEmployer(id:any) {
    return this.http
    .delete<IEmployer>(this.url_api + '/Employer/'+ id)
    .pipe(
      catchError(this.handleError));
  }
 
  public updateEmployer(id:any,employer:any) : Observable<IEmployer>{
    return this.http
    .put<IEmployer>(this.url_api + '/Employer/'+ id, employer)
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
