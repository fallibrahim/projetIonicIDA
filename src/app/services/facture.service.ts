import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IFacture } from '../models/facture';
@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private readonly url_api = "http://localhost:3000";
  constructor(
           private http:HttpClient
           ) { }

  
  public getFacture() : Observable<IFacture[]> {
    return this.http
    .get<IFacture[]>(this.url_api + "/Facture")
    .pipe(
    tap(facture => console.log('Facture :' +facture)),
    catchError(this.handleError));
  }

  public getOneFactureById(id:number): Observable <IFacture> {
    return this.http
    .get<IFacture>(this.url_api + '/Facture/'+ id)
    .pipe(
      catchError(this.handleError)
    )
  }

  public createFacture(facture:IFacture) : Observable<IFacture> {
    return this.http
    .post<IFacture>(this.url_api + "/Facture",facture)
    .pipe(catchError(this.handleError));
  }

  public deleteFacture(id:any) {
    return this.http
    .delete<IFacture>(this.url_api + '/Facture/'+ id)
    .pipe(
      catchError(this.handleError));
  }
 
  public updateFacture(id:any,facture:any) : Observable<IFacture>{
    return this.http
    .put<IFacture>(this.url_api + '/Facture/'+ id, facture)
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
