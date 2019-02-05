import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkReverseGeocodingComponent } from './bulk-reverse-geocoding.component';

describe('BulkReverseGeocodingComponent', () => {
  let component: BulkReverseGeocodingComponent;
  let fixture: ComponentFixture<BulkReverseGeocodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkReverseGeocodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkReverseGeocodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
