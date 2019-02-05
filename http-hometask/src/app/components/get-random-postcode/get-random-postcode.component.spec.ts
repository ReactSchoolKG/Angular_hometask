import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRandomPostcodeComponent } from './get-random-postcode.component';

describe('GetRandomPostcodeComponent', () => {
  let component: GetRandomPostcodeComponent;
  let fixture: ComponentFixture<GetRandomPostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRandomPostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRandomPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
