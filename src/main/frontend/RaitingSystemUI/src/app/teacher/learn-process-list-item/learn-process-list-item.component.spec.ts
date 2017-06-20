import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnProcessListItemComponent } from './learn-process-list-item.component';

describe('LearnProcessListItemComponent', () => {
  let component: LearnProcessListItemComponent;
  let fixture: ComponentFixture<LearnProcessListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnProcessListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnProcessListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
