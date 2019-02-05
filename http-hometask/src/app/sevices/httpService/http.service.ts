import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { throwError } from 'rxjs';

import { catchError, map, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly url = `https://postcodes.io`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  private _handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.message);
  }

  lookupPostcode(postcode) {
    return this.httpClient
      .get(`${this.url}/postcodes/${postcode}`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  bulkLookupPostcodes(postcodes) {
    return this.httpClient
      .post(`${this.url}/postcodes`, postcodes, this.httpOptions)
      .pipe(
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  nearestPostcodesByLongitudeAndLatitude(longitude, latitude) {
    return this.httpClient
      .get(`${this.url}/postcodes/?lon=${longitude}&lat=${latitude}`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  bulkReverseGeocoding(geolocation) {
    return this.httpClient
      .post(`${this.url}/postcodes`, geolocation, this.httpOptions)
      .pipe(
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  getRandomPostcode() {
    return this.httpClient
      .get(`${this.url}/random/postcodes`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  validatePostcode(postcode) {
    return this.httpClient
      .get(`${this.url}/postcodes/${postcode}/validate`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  getNearestPostcodesForPostcode(postcode) {
    return this.httpClient
      .get(`${this.url}/postcodes/${postcode}/nearest`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  autocompletePostcode(postcode) {
    return this.httpClient
      .get(`${this.url}/postcodes/${postcode}/autocomplete`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  queryPostcode(postcode) {
    return this.httpClient
      .get(`${this.url}/postcodes/?q=${postcode}`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  lookupTerminatedPostcode(postcode) {
    return this.httpClient
      .get(`${this.url}/terminated_postcodes/${postcode}`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  lookupOutwardCode(outcode) {
    return this.httpClient
      .get(`${this.url}/outcodes/${outcode}`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  lookupOutwardNearestCode(outcode) {
    return this.httpClient
      .get(`${this.url}/outcodes/${outcode}/nearest`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

  nearestOutcodesByLongitudeAndLatitude(longitude, latitude) {
    return this.httpClient
      .get(`${this.url}/outcodes/?lon=${longitude}&lat=${latitude}`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map((data: any) => data)
      );
  }

}
