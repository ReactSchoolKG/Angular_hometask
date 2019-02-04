import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookTerminatedComponent } from './look-terminated.component';

describe('LookTerminatedComponent', () => {
  let component: LookTerminatedComponent;
  let fixture: ComponentFixture<LookTerminatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookTerminatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookTerminatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
