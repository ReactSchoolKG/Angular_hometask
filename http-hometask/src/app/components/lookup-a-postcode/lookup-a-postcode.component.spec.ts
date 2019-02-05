import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupAPostcodeComponent } from './lookup-a-postcode.component';

describe('LookupAPostcodeComponent', () => {
  let component: LookupAPostcodeComponent;
  let fixture: ComponentFixture<LookupAPostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupAPostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupAPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
