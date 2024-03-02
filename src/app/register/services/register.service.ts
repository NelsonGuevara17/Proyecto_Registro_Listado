import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  path="http://localhost:3000/medicines";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(`Ann error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError( ()  => new Error('Something happened with request, please try again later'));
  }

  createMedicine(item: object){
    return this.http.post(this.path,item,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getAllMedicines(){
    return this.http.get(this.path,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
