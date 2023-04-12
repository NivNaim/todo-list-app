import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxTodosComponent } from './inbox-todos.component';

describe('InboxTodosComponent', () => {
  let component: InboxTodosComponent;
  let fixture: ComponentFixture<InboxTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboxTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
