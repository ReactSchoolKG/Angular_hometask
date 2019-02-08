import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LookupPostcodeComponent } from './components/lookup-postcode/lookup-postcode.component';
import { BulkLookupPostcodesComponent } from './components/bulk-lookup-postcodes/bulk-lookup-postcodes.component';
import { PostcodesLongitudeLatitudeComponent } from './components/postcodes-longitude-latitude/postcodes-longitude-latitude.component';
import { BulkReverseGeocodingComponent } from './components/bulk-reverse-geocoding/bulk-reverse-geocoding.component';
import { RandomPostcodeComponent } from './components/random-postcode/random-postcode.component';
import { ValidatePostcodeComponent } from './components/validate-postcode/validate-postcode.component';
import { NearestPostcodesComponent } from './components/nearest-postcodes/nearest-postcodes.component';
import { AutocompletePostcodeComponent } from './components/autocomplete-postcode/autocomplete-postcode.component';
import { QueryPostcodeComponent } from './components/query-postcode/query-postcode.component';
import { LookupTerminatedPostcodeComponent } from './components/lookup-terminated-postcode/lookup-terminated-postcode.component';
import { LookupOutwardCodeComponent } from './components/lookup-outward-code/lookup-outward-code.component';
import { NearestOutwardCodeForOutwardCodeComponent } from './components/nearest-outward-code-for-outward-code/nearest-outward-code-for-outward-code.component';
import { NearestOutwardCodesForGivenLongitudeLatitudeComponent } from './components/nearest-outward-codes-for-given-longitude-latitude/nearest-outward-codes-for-given-longitude-latitude.component';

@NgModule({
  declarations: [
    AppComponent,
    LookupPostcodeComponent,
    BulkLookupPostcodesComponent,
    PostcodesLongitudeLatitudeComponent,
    BulkReverseGeocodingComponent, 
    RandomPostcodeComponent,
    ValidatePostcodeComponent,
    NearestPostcodesComponent,
    AutocompletePostcodeComponent,
    QueryPostcodeComponent,
    LookupTerminatedPostcodeComponent,
    LookupOutwardCodeComponent,
    NearestOutwardCodeForOutwardCodeComponent,
    NearestOutwardCodesForGivenLongitudeLatitudeComponent
    
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
