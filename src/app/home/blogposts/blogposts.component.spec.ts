import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostsComponent } from './blogposts.component';

describe('BlogpostsComponent', () => {
  let component: BlogpostsComponent;
  let fixture: ComponentFixture<BlogpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
