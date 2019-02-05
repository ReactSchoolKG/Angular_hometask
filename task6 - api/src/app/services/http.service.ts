import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url = `https://postcodes.io`;

  constructor(private httpClient:HttpClient) { }

  postcode(search:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/postcodes/${search}`)
      .pipe(
        catchError(this._handleError));
  }

  bulkPostcode(search:string):Observable<any>{
    return this.httpClient
      .post<{status:number, result:object}>(
        `${this.url}/postcodes/`, search, {headers: {'Content-Type':  'application/json'}})
      .pipe(
        catchError(this._handleError));
  }

  lonLatPostcode(lon:string, lat:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/postcodes?lon=${lon}&lat=${lat}`)
      .pipe(
        catchError(this._handleError))
  }

  randomPostcode():Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/random/postcodes`)
      .pipe(
        catchError(this._handleError))
  }

  validatePostcode(search:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/postcodes/${search}/validate`)
      .pipe(
        catchError(this._handleError))
  }

  nearestPostcodes(search:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/postcodes/${search}/nearest`)
      .pipe(
        catchError(this._handleError))
  }

  autocompletePostcode(search:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/postcodes/${search}/autocomplete`)
      .pipe(
        catchError(this._handleError))
  }

  queryPostcode(search:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/postcodes?q=${search}`)
      .pipe(
        catchError(this._handleError))
  }

  terminatedPostcode(search:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/terminated_postcodes/${search}`)
      .pipe(
        catchError(this._handleError))
  }

  outwardCode(search:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/outcodes/${search}`)
      .pipe(
        catchError(this._handleError))
  }

  nearestOutwardCode(search:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/outcodes/${search}/nearest`)
      .pipe(
        catchError(this._handleError))
  }

  nearestOutwardCodeLonLat(lon:string, lat:string):Observable<any>{
    return this.httpClient
      .get<{status:number, error:string}>(
        `${this.url}/outcodes?lon=${lon}&lat=${lat}`)
      .pipe(
        catchError(this._handleError))
  }

  private _handleError(err: HttpErrorResponse){
    return throwError(err.error);
  }
}