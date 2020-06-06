import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstackComponent } from './techstack.component';

describe('TechstackComponent', () => {
  let component: TechstackComponent;
  let fixture: ComponentFixture<TechstackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechstackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
