import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnProcessListComponent } from './learn-process-list.component';

describe('LearnProcessListComponent', () => {
  let component: LearnProcessListComponent;
  let fixture: ComponentFixture<LearnProcessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnProcessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnProcessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
