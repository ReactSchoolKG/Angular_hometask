import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupTerminatedPostcodeComponent } from './lookup-terminated-postcode.component';

describe('LookupTerminatedPostcodeComponent', () => {
  let component: LookupTerminatedPostcodeComponent;
  let fixture: ComponentFixture<LookupTerminatedPostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupTerminatedPostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupTerminatedPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
