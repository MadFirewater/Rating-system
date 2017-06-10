import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseListItemComponent } from './base-list-item.component';

describe('BaseListItemComponent', () => {
  let component: BaseListItemComponent;
  let fixture: ComponentFixture<BaseListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
