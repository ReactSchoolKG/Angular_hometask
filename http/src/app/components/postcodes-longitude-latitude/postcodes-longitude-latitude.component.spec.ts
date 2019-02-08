import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodesLongitudeLatitudeComponent } from './postcodes-longitude-latitude.component';

describe('PostcodesLongitudeLatitudeComponent', () => {
  let component: PostcodesLongitudeLatitudeComponent;
  let fixture: ComponentFixture<PostcodesLongitudeLatitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcodesLongitudeLatitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodesLongitudeLatitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
