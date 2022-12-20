import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IDemandeD } from '../models/demandeDepense';

@Injectable({
  providedIn: 'root'
})
export class DemandeDepenseService {
  private readonly url_api = "http://localhost:3000";
  constructor(
           private http:HttpClient
           ) { }

  
  public getDemandeDepense() : Observable<IDemandeD[]> {
    return this.http
    .get<IDemandeD[]>(this.url_api + "/DemandeDepense")
    .pipe(
    tap(demandeDepense => console.log('demandeDepense :' +demandeDepense)),
    catchError(this.handleError));
  }

  public getOneDemandeDepenseById(id:number): Observable <IDemandeD> {
    return this.http
    .get<IDemandeD>(this.url_api + '/DemandeDepense/'+ id)
    .pipe(
      catchError(this.handleError)
    )
  }

  public createDemandeDepense(demandeDepense:IDemandeD) : Observable<IDemandeD> {
    return this.http
    .post<IDemandeD>(this.url_api + "/DemandeDepense",demandeDepense)
    .pipe(catchError(this.handleError));
  }

  public deleteDemandeDepense(id:any) {
    return this.http
    .delete<IDemandeD>(this.url_api + '/DemandeDepense/'+ id)
    .pipe(
      catchError(this.handleError));
  }
 
  public updateDemandeDepense(id:any,demandeDepense:any) : Observable<IDemandeD>{
    return this.http
    .put<IDemandeD>(this.url_api + '/demandeDepense/'+ id, demandeDepense)
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
