import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IAdmin } from '../models/admin';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly url_api = "http://localhost:3000";
  constructor(
           private http:HttpClient
           ) { }

  
  public getAdmin() : Observable<IAdmin[]> {
    return this.http
    .get<IAdmin[]>(this.url_api + "/Admin")
    .pipe(
    tap(Admin => console.log('Admin :' +Admin)),
    catchError(this.handleError));
  }

  public getOneAdminById(id:number): Observable <IAdmin> {
    return this.http
    .get<IAdmin>(this.url_api + '/admin/'+ id)
    .pipe(
      catchError(this.handleError)
    )
  }

  public createAdmin(admin:IAdmin) : Observable<IAdmin> {
    admin = {
      ...admin,
      id : null!
   };
    return this.http
    .post<IAdmin>(this.url_api + "/Admin",admin)
    .pipe(catchError(this.handleError));
  }

  public deleteAdmin(id:number) {
    return this.http
    .delete<IAdmin>(this.url_api + '/Admin/'+ id)
    .pipe(
      catchError(this.handleError));
  }
 
  public updateAdmin(admin:IAdmin) : Observable<IAdmin>{
    return this.http
    .put<IAdmin>(this.url_api + '/Admin/'+ admin.id, admin)
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
