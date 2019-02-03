import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePostHeaderComponent } from './sample-post-header.component';

describe('SamplePostHeaderComponent', () => {
  let component: SamplePostHeaderComponent;
  let fixture: ComponentFixture<SamplePostHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePostHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
