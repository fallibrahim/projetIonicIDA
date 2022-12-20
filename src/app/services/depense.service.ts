import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IDepense } from '../models/depense';

@Injectable({
  providedIn: 'root'
})
export class DepenseService{
  private readonly url_api = "http://localhost:3000";
  constructor(
           private http:HttpClient
           ) { }

  
  public getDepense() : Observable<IDepense[]> {
    return this.http
    .get<IDepense[]>(this.url_api + "/Depense")
    .pipe(
    tap(depense => console.log('Depense :' +depense)),
    catchError(this.handleError));
  }

  public getOneDepenseById(id:number): Observable <IDepense> {
    return this.http
    .get<IDepense>(this.url_api + '/Depense/'+ id)
    .pipe(
      catchError(this.handleError)
    )
  }

  public createDepense(depense:IDepense) : Observable<IDepense> {
    return this.http
    .post<IDepense>(this.url_api + "/Depense",depense)
    .pipe(catchError(this.handleError));
  }

  public deleteDepense(id:any) {
    return this.http
    .delete<IDepense>(this.url_api + '/Depense/'+ id)
    .pipe(
      catchError(this.handleError));
  }
 
  public updateDepense(id:any,depense:any) : Observable<IDepense>{
    return this.http
    .put<IDepense>(this.url_api + '/Depense/'+ id, depense)
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
