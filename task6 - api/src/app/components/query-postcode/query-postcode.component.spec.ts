import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPostcodeComponent } from './query-postcode.component';

describe('QueryPostcodeComponent', () => {
  let component: QueryPostcodeComponent;
  let fixture: ComponentFixture<QueryPostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryPostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
