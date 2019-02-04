import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestByCoordinatesComponent } from './nearest-by-coordinates.component';

describe('NearestByCoordinatesComponent', () => {
  let component: NearestByCoordinatesComponent;
  let fixture: ComponentFixture<NearestByCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestByCoordinatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestByCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
