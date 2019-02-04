import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { IGetCommon} from '../models/get-common'
import { IAutocompleteType} from '../models/autocomplete-type'
import { IBulkLookup} from '../models/ibulk-lookup'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly url = 'https://postcodes.io';

  constructor(private httpClient: HttpClient) { }

  // Autocomplete a postcode partial
  postcodeAutocomplete(search: string): Observable<string[]> {
    // forbid empty requests
    if(search.length === 0){search='NotValid'}
    return this.httpClient
      .get<IAutocompleteType>(
        `${this.url}/postcodes/${search}/autocomplete`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map(({ result }) => result));
  }

  // Lookup a postcode
  lookupPostcode(search) {
    return this.httpClient
      .get<IGetCommon>(
        `${this.url}/postcodes/${search}`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }

  // Bulk lookup postcodes
  bulkLookupPostcode(search) {
    return this.httpClient
      .post<IBulkLookup>(
        `${this.url}/postcodes`, search, this.httpOptions)
      .pipe(
        catchError(this._handleError));
  }

  // Get nearest postcodes for a given longitude & latitude
  nearestByCoordinates(search) {
    return this.httpClient
      .get<IGetCommon>(
        `${this.url}/postcodes/?lon=${search.long}&lat=${search.latt}`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }

  // Bulk Reverse Geocoding
  getBulkReverseGeocoding(search) {
    return this.httpClient
      .post<any>(
        `${this.url}/postcodes`, search, this.httpOptions)
      .pipe(
        catchError(this._handleError));
  }

  // Get a random postcode
  getRandomPostcode() {
    return this.httpClient
      .get<IGetCommon>(
        `${this.url}/random/postcodes`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }

  // Validate a postcode
  validatePostcode(search: string): Observable<string[]> {
    // forbid empty requests
    if(search.length === 0){search='NotValid'}
    return this.httpClient
      .get<IAutocompleteType>(
        `${this.url}/postcodes/${search}/validate`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map(({ result }) => result));
  }

  // Nearest postcodes for postcode
  findNearest(search) {
    return this.httpClient
      .get<IGetCommon>(
        `${this.url}/postcodes/${search}/nearest`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }

  // Query for postcode
  queryForPastcode(search) {
    return this.httpClient
      .get<IGetCommon>(
        `${this.url}/postcodes/?q=${search}`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }

  // Lookup terminated postcode
  lookTerminated(search) {
    return this.httpClient
      .get<IGetCommon>(
        `${this.url}/terminated_postcodes/${search}`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }

  // Lookup Outward Code
  lookupOutwardCode(search) {
    return this.httpClient
      .get<any>(
        `${this.url}/outcodes/${search}`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }

  // Nearest outward code for outward code
  lookupNearestOutwardCode(search) {
    return this.httpClient
      .get<IGetCommon>(
        `${this.url}/outcodes/${search}/nearest`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }

  // Get nearest outward codes for a given longitude & latitude
  getNearestOutwardCodeCoord(search) {
    return this.httpClient
      .get<IGetCommon>(
        `${this.url}/outcodes?lon=${search.long}&lat=${search.latt}`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }



  // Http Error handler
  private _handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err);
  }

  // http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

}