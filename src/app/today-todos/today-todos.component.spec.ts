import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTodosComponent } from './today-todos.component';

describe('TodayTodosComponent', () => {
  let component: TodayTodosComponent;
  let fixture: ComponentFixture<TodayTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
