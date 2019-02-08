import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePostcodeComponent } from './autocomplete-postcode.component';

describe('AutocompletePostcodeComponent', () => {
  let component: AutocompletePostcodeComponent;
  let fixture: ComponentFixture<AutocompletePostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompletePostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletePostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
