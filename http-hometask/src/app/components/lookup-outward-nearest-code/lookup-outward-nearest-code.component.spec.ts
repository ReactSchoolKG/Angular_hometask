import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupOutwardNearestCodeComponent } from './lookup-outward-nearest-code.component';

describe('LookupOutwardNearestCodeComponent', () => {
  let component: LookupOutwardNearestCodeComponent;
  let fixture: ComponentFixture<LookupOutwardNearestCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupOutwardNearestCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupOutwardNearestCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
