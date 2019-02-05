import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestPostcodesForPostcodeComponent } from './nearest-postcodes-for-postcode.component';

describe('NearestPostcodesForPostcodeComponent', () => {
  let component: NearestPostcodesForPostcodeComponent;
  let fixture: ComponentFixture<NearestPostcodesForPostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestPostcodesForPostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestPostcodesForPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
