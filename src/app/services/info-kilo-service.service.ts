import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IinfosKilo } from '../models/model1';
@Injectable({
  providedIn: 'root'
})
export class InfoKiloServiceService {

  private readonly url_api = "http://localhost:3000";

  constructor(private http : HttpClient) {  }
  public getInfoKilo() : Observable<IinfosKilo[]> {
    return this.http
    .get<IinfosKilo[]>(this.url_api+"/infosKilo")
    .pipe(
      tap(infokilo => console.log('infokilo :' +infokilo)),
      catchError(this.handleError)
    );
  }
  public getOneInfoKiloById(id:number): Observable <IinfosKilo> {
    return this.http
    .get<IinfosKilo>(this.url_api + '/infosKilo/'+ id)
    .pipe(
      catchError(this.handleError)
    )
  }

  public createInfoKilo(infokilo:IinfosKilo) : Observable<IinfosKilo> {
    return this.http
    .post<IinfosKilo>(this.url_api + "/infoKilo",infokilo)
    .pipe(catchError(this.handleError));
  }

  public deleteInfoKilo(id:any) {
    return this.http
    .delete<IinfosKilo>(this.url_api + '/infosKilo/'+ id)
    .pipe(
      catchError(this.handleError));
  }
 
  public updateInfoKilo(id:any,employer:any) : Observable<IinfosKilo>{
    return this.http
    .put<IinfosKilo>(this.url_api + '/infosKilo/'+ id, employer)
    .pipe(
        catchError(this.handleError)
    );
   }
  private handleError(error: HttpErrorResponse) {
    let errorMessage!: string;
    if (error.status === 0) {
      console.error("Une erreur s'est produite :", error.error.message);
      errorMessage = `Une erreur s'est produite :, ${error.error.message}`;
       
    } else {
      console.error(
        `Code renvoyé par le backend ${ error.status } `+
        `le corps était: ${ error.status }`);
        errorMessage = `Code renvoyé par le backend ${ error.status }, ` +
        `le corps était: ${ error.status }`;
        
    }
    return throwError(() => new Error('Quelque chose de terrible est arrivé; Veuillez réessayer plus tard.' +
    errorMessage));
  }
}
