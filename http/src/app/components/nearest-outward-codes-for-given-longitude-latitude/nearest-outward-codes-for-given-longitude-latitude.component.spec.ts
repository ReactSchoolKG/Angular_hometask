import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestOutwardCodesForGivenLongitudeLatitudeComponent } from './nearest-outward-codes-for-given-longitude-latitude.component';

describe('NearestOutwardCodesForGivenLongitudeLatitudeComponent', () => {
  let component: NearestOutwardCodesForGivenLongitudeLatitudeComponent;
  let fixture: ComponentFixture<NearestOutwardCodesForGivenLongitudeLatitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestOutwardCodesForGivenLongitudeLatitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestOutwardCodesForGivenLongitudeLatitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
