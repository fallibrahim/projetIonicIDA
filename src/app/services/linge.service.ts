import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ITypeLinge } from '../models/typeLinge';
import { IDetailLinge } from '../models/lingeDetail';


@Injectable({
  providedIn: 'root'
})
export class LingeService {
  private readonly url_api = "http://localhost:3000";
  constructor(private http : HttpClient) { }

  public getLinge() : Observable<ITypeLinge[]> {
    return this.http
    .get<ITypeLinge[]>(this.url_api + "/TypeLinge")
    .pipe(
    tap(TypeLinge => console.log('TypeLing :' +TypeLinge)),
    catchError(this.handleError));
  }
  public  getOneLingeById(id:number): Observable <ITypeLinge> {
    return this.http
    .get<ITypeLinge>(this.url_api + '/typeLinge/'+ id)
    .pipe(
      catchError(this.handleError)
    )
  }
  public getLingeDetails() : Observable<IDetailLinge[]> {
    return this.http
    .get<IDetailLinge[]>(this.url_api + "/Linge")
    .pipe(
    tap(TypeLinge => console.log('TypeLing :' +TypeLinge)),
    catchError(this.handleError));
  }
  public createLinge(linge:ITypeLinge) : Observable<ITypeLinge> {
    return this.http
    .post<ITypeLinge>(this.url_api + "/TypeLinge",linge)
    .pipe(catchError(this.handleError));
  }

  public updateLinge(id:any,linge:any) : Observable<ITypeLinge>{
    return this.http
    .put<ITypeLinge>(this.url_api + '/TypeLinge/'+ id, linge)
    .pipe(
        catchError(this.handleError)
    );
   }

   public deleteLinge(id:any) {
    return this.http
    .delete<ITypeLinge>(this.url_api + '/TypeLinge/'+ id)
    .pipe(
      catchError(this.handleError));
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
