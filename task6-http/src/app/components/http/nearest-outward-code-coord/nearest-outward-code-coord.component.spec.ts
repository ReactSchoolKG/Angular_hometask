import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestOutwardCodeCoordComponent } from './nearest-outward-code-coord.component';

describe('NearestOutwardCodeCoordComponent', () => {
  let component: NearestOutwardCodeCoordComponent;
  let fixture: ComponentFixture<NearestOutwardCodeCoordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestOutwardCodeCoordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestOutwardCodeCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
