import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestOutwardCodesLogitudeLatitudeComponent } from './nearest-outward-codes-logitude-latitude.component';

describe('NearestOutwardCodesLogitudeLatitudeComponent', () => {
  let component: NearestOutwardCodesLogitudeLatitudeComponent;
  let fixture: ComponentFixture<NearestOutwardCodesLogitudeLatitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestOutwardCodesLogitudeLatitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestOutwardCodesLogitudeLatitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
