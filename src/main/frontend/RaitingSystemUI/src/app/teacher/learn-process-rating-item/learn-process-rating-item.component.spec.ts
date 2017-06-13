import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnProcessRatingItemComponent } from './learn-process-rating-item.component';

describe('LearnProcessRatingItemComponent', () => {
  let component: LearnProcessRatingItemComponent;
  let fixture: ComponentFixture<LearnProcessRatingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnProcessRatingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnProcessRatingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
