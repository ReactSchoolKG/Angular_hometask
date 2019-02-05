import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminatedPostCodeComponent } from './terminated-post-code.component';

describe('TerminatedPostCodeComponent', () => {
  let component: TerminatedPostCodeComponent;
  let fixture: ComponentFixture<TerminatedPostCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminatedPostCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminatedPostCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
