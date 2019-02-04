import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPostcodeComponent } from './random-postcode.component';

describe('RandomPostcodeComponent', () => {
  let component: RandomPostcodeComponent;
  let fixture: ComponentFixture<RandomPostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
