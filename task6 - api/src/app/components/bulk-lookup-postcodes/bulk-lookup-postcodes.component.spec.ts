import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkLookupPostcodesComponent } from './bulk-lookup-postcodes.component';

describe('BulkLookupPostcodesComponent', () => {
  let component: BulkLookupPostcodesComponent;
  let fixture: ComponentFixture<BulkLookupPostcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkLookupPostcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkLookupPostcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
