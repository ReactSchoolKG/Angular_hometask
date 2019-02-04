import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkLookupComponent } from './bulk-lookup.component';

describe('BulkLookupComponent', () => {
  let component: BulkLookupComponent;
  let fixture: ComponentFixture<BulkLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
