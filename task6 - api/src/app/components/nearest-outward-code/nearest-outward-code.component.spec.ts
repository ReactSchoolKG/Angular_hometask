import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestOutwardCodeComponent } from './nearest-outward-code.component';

describe('NearestOutwardCodeComponent', () => {
  let component: NearestOutwardCodeComponent;
  let fixture: ComponentFixture<NearestOutwardCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestOutwardCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestOutwardCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
