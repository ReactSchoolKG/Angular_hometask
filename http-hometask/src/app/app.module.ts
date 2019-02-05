import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LookupAPostcodeComponent } from './components/lookup-a-postcode/lookup-a-postcode.component';
import { BulkLookupPostcodesComponent } from './components/bulk-lookup-postcodes/bulk-lookup-postcodes.component';
import { NearestPostcodesLongitudeLatitudeGetComponent } from './components/nearest-postcodes-longitude-latitude-get/nearest-postcodes-longitude-latitude-get.component';
import { BulkReverseGeocodingComponent } from './components/bulk-reverse-geocoding/bulk-reverse-geocoding.component';
import { GetRandomPostcodeComponent } from './components/get-random-postcode/get-random-postcode.component';
import { ValidatePostcodeComponent } from './components/validate-postcode/validate-postcode.component';
import { NearestPostcodesForPostcodeComponent } from './components/nearest-postcodes-for-postcode/nearest-postcodes-for-postcode.component';
import { AutocompletePostcodeComponent } from './components/autocomplete-postcode/autocomplete-postcode.component';
import { QueryPostcodeComponent } from './components/query-postcode/query-postcode.component';
import { LookupTerminatedPostcodeComponent } from './components/lookup-terminated-postcode/lookup-terminated-postcode.component';
import { LookupOutwardCodeComponent } from './components/lookup-outward-code/lookup-outward-code.component';
import { LookupOutwardNearestCodeComponent } from './components/lookup-outward-nearest-code/lookup-outward-nearest-code.component';
import { NearestOutwardCodesLogitudeLatitudeComponent } from './components/nearest-outward-codes-logitude-latitude/nearest-outward-codes-logitude-latitude.component';

@NgModule({
  declarations: [
    AppComponent,
    LookupAPostcodeComponent,
    BulkLookupPostcodesComponent,
    NearestPostcodesLongitudeLatitudeGetComponent,
    BulkReverseGeocodingComponent,
    GetRandomPostcodeComponent,
    ValidatePostcodeComponent,
    NearestPostcodesForPostcodeComponent,
    AutocompletePostcodeComponent,
    QueryPostcodeComponent,
    LookupTerminatedPostcodeComponent,
    LookupOutwardCodeComponent,
    LookupOutwardNearestCodeComponent,
    NearestOutwardCodesLogitudeLatitudeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
