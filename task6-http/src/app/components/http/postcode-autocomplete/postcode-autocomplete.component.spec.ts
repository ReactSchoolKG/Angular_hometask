import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeAutocompleteComponent } from './postcode-autocomplete.component';

describe('PostcodeAutocompleteComponent', () => {
  let component: PostcodeAutocompleteComponent;
  let fixture: ComponentFixture<PostcodeAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcodeAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodeAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
