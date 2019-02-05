import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LookupPostcodeComponent } from './components/lookup-postcode/lookup-postcode.component';
import { BulkLookupPostcodesComponent } from './components/bulk-lookup-postcodes/bulk-lookup-postcodes.component';
import { PostcodesLongitudeLatitudeComponent } from './components/postcodes-longitude-latitude/postcodes-longitude-latitude.component';
import { BulkReverseComponent } from './components/bulk-reverse/bulk-reverse.component';
import { RandomPostcodesComponent } from './components/random-postcodes/random-postcodes.component';
import { ValidatePostcodeComponent } from './components/validate-postcode/validate-postcode.component';
import { NearestPostcodesComponent } from './components/nearest-postcodes/nearest-postcodes.component';
import { AutocompletePostcodeComponent } from './components/autocomplete-postcode/autocomplete-postcode.component';
import { QueryPostcodeComponent } from './components/query-postcode/query-postcode.component';
import { TerminatedPostCodeComponent } from './components/terminated-post-code/terminated-post-code.component';
import { OutwardCodeComponent } from './components/outward-code/outward-code.component';
import { NearestOutwardCodeComponent } from './components/nearest-outward-code/nearest-outward-code.component';
import { OutwardLongitudeLatitudeComponent } from './components/outward-longitude-latitude/outward-longitude-latitude.component';
@NgModule({
  declarations: [
    AppComponent,
    LookupPostcodeComponent,
    BulkLookupPostcodesComponent,
    PostcodesLongitudeLatitudeComponent,
    BulkReverseComponent,
    RandomPostcodesComponent,
    ValidatePostcodeComponent,
    NearestPostcodesComponent,
    AutocompletePostcodeComponent,
    QueryPostcodeComponent,
    TerminatedPostCodeComponent,
    OutwardCodeComponent,
    NearestOutwardCodeComponent,
    OutwardLongitudeLatitudeComponent
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
