import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherContentContainerComponent } from './teacher-content-container.component';

describe('TeacherContentContainerComponent', () => {
  let component: TeacherContentContainerComponent;
  let fixture: ComponentFixture<TeacherContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
