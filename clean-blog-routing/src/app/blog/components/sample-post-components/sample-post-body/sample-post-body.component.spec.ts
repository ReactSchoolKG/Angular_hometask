import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePostBodyComponent } from './sample-post-body.component';

describe('SamplePostBodyComponent', () => {
  let component: SamplePostBodyComponent;
  let fixture: ComponentFixture<SamplePostBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePostBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePostBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
