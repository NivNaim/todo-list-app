import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup;

  constructor(private router: Router, private tasksService: TasksService) {}

  ngOnInit() {
    this.addTaskForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  onSubmit(form: FormGroup) {
    const title = form.value.title;
    const date = form.value.date;
    this.tasksService.addTask(title, date);
    this.router.navigate(['/']);
  }
}
