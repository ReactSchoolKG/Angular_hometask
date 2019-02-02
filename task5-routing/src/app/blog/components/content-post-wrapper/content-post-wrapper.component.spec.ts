import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPostWrapperComponent } from './content-post-wrapper.component';

describe('ContentPostWrapperComponent', () => {
  let component: ContentPostWrapperComponent;
  let fixture: ComponentFixture<ContentPostWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPostWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPostWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
