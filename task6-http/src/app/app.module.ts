import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MastComponent } from './components/mast/mast.component';
import { FooterComponent } from './components/footer/footer.component';
import { LookupPostcodeComponent } from './components/http/lookup-postcode/lookup-postcode.component';
import { BulkLookupComponent } from './components/http/bulk-lookup/bulk-lookup.component';
import { PostcodeAutocompleteComponent } from './components/http/postcode-autocomplete/postcode-autocomplete.component';
import { NearestByCoordinatesComponent } from './components/http/nearest-by-coordinates/nearest-by-coordinates.component';
import { BulkReverseGeocodingComponent } from './components/http/bulk-reverse-geocoding/bulk-reverse-geocoding.component';
import { RandomPostcodeComponent } from './components/http/random-postcode/random-postcode.component';
import { ValidatePostcodeComponent } from './components/http/validate-postcode/validate-postcode.component';
import { FindNearestComponent } from './components/http/find-nearest/find-nearest.component';
import { QueryForPastcodeComponent } from './components/http/query-for-pastcode/query-for-pastcode.component';
import { LookTerminatedComponent } from './components/http/look-terminated/look-terminated.component';
import { LookupOutwardCodeComponent } from './components/http/lookup-outward-code/lookup-outward-code.component';
import { LookupNearestOutwardComponent } from './components/http/lookup-nearest-outward/lookup-nearest-outward.component';
import { NearestOutwardCodeCoordComponent } from './components/http/nearest-outward-code-coord/nearest-outward-code-coord.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MastComponent,
    FooterComponent,
    LookupPostcodeComponent,
    BulkLookupComponent,
    PostcodeAutocompleteComponent,
    NearestByCoordinatesComponent,
    BulkReverseGeocodingComponent,
    RandomPostcodeComponent,
    ValidatePostcodeComponent,
    FindNearestComponent,
    QueryForPastcodeComponent,
    LookTerminatedComponent,
    LookupOutwardCodeComponent,
    LookupNearestOutwardComponent,
    NearestOutwardCodeCoordComponent,
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