import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkReverseComponent } from './bulk-reverse.component';

describe('BulkReverseComponent', () => {
  let component: BulkReverseComponent;
  let fixture: ComponentFixture<BulkReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
