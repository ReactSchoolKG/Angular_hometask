import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatePostcodeComponent } from './validate-postcode.component';

describe('ValidatePostcodeComponent', () => {
  let component: ValidatePostcodeComponent;
  let fixture: ComponentFixture<ValidatePostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatePostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatePostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
