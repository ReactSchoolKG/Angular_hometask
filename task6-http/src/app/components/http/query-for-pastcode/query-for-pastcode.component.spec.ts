import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryForPastcodeComponent } from './query-for-pastcode.component';

describe('QueryForPastcodeComponent', () => {
  let component: QueryForPastcodeComponent;
  let fixture: ComponentFixture<QueryForPastcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryForPastcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryForPastcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
