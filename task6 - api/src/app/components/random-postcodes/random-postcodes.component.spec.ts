import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPostcodesComponent } from './random-postcodes.component';

describe('RandomPostcodesComponent', () => {
  let component: RandomPostcodesComponent;
  let fixture: ComponentFixture<RandomPostcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPostcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPostcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
