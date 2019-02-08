import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupPostcodeComponent } from './lookup-postcode.component';

describe('LookupPostcodeComponent', () => {
  let component: LookupPostcodeComponent;
  let fixture: ComponentFixture<LookupPostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LookupPostcodeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
