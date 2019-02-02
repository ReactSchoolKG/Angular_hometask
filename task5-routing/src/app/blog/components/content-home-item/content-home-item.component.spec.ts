import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHomeItemComponent } from './content-home-item.component';

describe('ContentHomeItemComponent', () => {
  let component: ContentHomeItemComponent;
  let fixture: ComponentFixture<ContentHomeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHomeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
