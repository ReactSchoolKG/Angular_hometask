import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestPostcodesComponent } from './nearest-postcodes.component';

describe('NearestPostcodesComponent', () => {
  let component: NearestPostcodesComponent;
  let fixture: ComponentFixture<NearestPostcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestPostcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestPostcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
