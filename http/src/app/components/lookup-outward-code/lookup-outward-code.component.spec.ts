import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupOutwardCodeComponent } from './lookup-outward-code.component';

describe('LookupOutwardCodeComponent', () => {
  let component: LookupOutwardCodeComponent;
  let fixture: ComponentFixture<LookupOutwardCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupOutwardCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupOutwardCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
