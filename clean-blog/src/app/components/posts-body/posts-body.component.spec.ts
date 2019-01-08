import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsBodyComponent } from './posts-body.component';

describe('PostsBodyComponent', () => {
  let component: PostsBodyComponent;
  let fixture: ComponentFixture<PostsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
