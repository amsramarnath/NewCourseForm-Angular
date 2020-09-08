import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFromComponentComponent } from './new-course-from-component.component';

describe('NewCourseFromComponentComponent', () => {
  let component: NewCourseFromComponentComponent;
  let fixture: ComponentFixture<NewCourseFromComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseFromComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFromComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
