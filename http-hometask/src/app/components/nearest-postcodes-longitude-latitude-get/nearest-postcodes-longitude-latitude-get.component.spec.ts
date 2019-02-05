import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestPostcodesLongitudeLatitudeGetComponent } from './nearest-postcodes-longitude-latitude-get.component';

describe('NearestPostcodesLongitudeLatitudeGetComponent', () => {
  let component: NearestPostcodesLongitudeLatitudeGetComponent;
  let fixture: ComponentFixture<NearestPostcodesLongitudeLatitudeGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestPostcodesLongitudeLatitudeGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestPostcodesLongitudeLatitudeGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
