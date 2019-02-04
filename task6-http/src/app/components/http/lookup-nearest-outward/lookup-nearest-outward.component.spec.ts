import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupNearestOutwardComponent } from './lookup-nearest-outward.component';

describe('LookupNearestOutwardComponent', () => {
  let component: LookupNearestOutwardComponent;
  let fixture: ComponentFixture<LookupNearestOutwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupNearestOutwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupNearestOutwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
