import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardLongitudeLatitudeComponent } from './outward-longitude-latitude.component';

describe('OutwardLongitudeLatitudeComponent', () => {
  let component: OutwardLongitudeLatitudeComponent;
  let fixture: ComponentFixture<OutwardLongitudeLatitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardLongitudeLatitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardLongitudeLatitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
