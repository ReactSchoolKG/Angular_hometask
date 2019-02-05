import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCodeComponent } from './outward-code.component';

describe('OutwardCodeComponent', () => {
  let component: OutwardCodeComponent;
  let fixture: ComponentFixture<OutwardCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
