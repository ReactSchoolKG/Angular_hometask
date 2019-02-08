import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestOutwardCodeForOutwardCodeComponent } from './nearest-outward-code-for-outward-code.component';

describe('NearestOutwardCodeForOutwardCodeComponent', () => {
  let component: NearestOutwardCodeForOutwardCodeComponent;
  let fixture: ComponentFixture<NearestOutwardCodeForOutwardCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestOutwardCodeForOutwardCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestOutwardCodeForOutwardCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
