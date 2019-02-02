import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHomeWrapperComponent } from './content-home-wrapper.component';

describe('ContentHomeWrapperComponent', () => {
  let component: ContentHomeWrapperComponent;
  let fixture: ComponentFixture<ContentHomeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHomeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHomeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
