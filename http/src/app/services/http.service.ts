import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly API = `https://postcodes.io`;

  constructor(private httpClient: HttpClient) { }

  postcode(search: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(`${this.API}/postcodes/${search}`)
      .pipe(
        catchError(this._handleError));
  }

  bulkPostcodes(search: string): Observable<any> {
    return this.httpClient
      .post<{ status: number, result: object }>(
        `${this.API}/postcodes/`, search, { headers: { 'Content-Type': 'application/json' } })
      .pipe(
        catchError(this._handleError));
  }

  nearestPostcodesForLonLat(longitude: string, latitude: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/postcodes?lon=${longitude}&lat=${latitude}`)
      .pipe(
        catchError(this._handleError))
  }

  randomPostcode(): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/random/postcodes`)
      .pipe(
        catchError(this._handleError))
  }

  validatePostcode(search: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/postcodes/${search}/validate`)
      .pipe(
        catchError(this._handleError))
  }

  nearestPostcodes(search: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/postcodes/${search}/nearest`)
      .pipe(
        catchError(this._handleError))
  }

  autocompletePostcode(search: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/postcodes/${search}/autocomplete`)
      .pipe(
        catchError(this._handleError))
  }

  queryPostcode(search: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/postcodes?q=${search}`)
      .pipe(
        catchError(this._handleError))
  }

  terminatedPostcode(search: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/terminated_postcodes/${search}`)
      .pipe(
        catchError(this._handleError))
  }

  outwardCode(search: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/outcodes/${search}`)
      .pipe(
        catchError(this._handleError))
  }

  nearestOutwardCodeForOutward(search: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/outcodes/${search}/nearest`)
      .pipe(
        catchError(this._handleError))
  }

  nearestOutwardCodeForLonLat(longitude: string, latitude: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(
        `${this.API}/outcodes?lon=${longitude}&lat=${latitude}`)
      .pipe(
        catchError(this._handleError))
  }

  private _handleError(err: HttpErrorResponse) {
    return throwError(err.error);
  }
}