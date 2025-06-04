import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task, TaskStatus } from '../task.model';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { addTask, removeTask, updateTaskStatus } from '../store/task.actions';
import { selectAllTasks } from '../store/task.selectors';

@Component({
  selector: 'app-tasks-list',
  imports: [CommonModule, FormsModule, MatIconModule,
    MatButtonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  standalone: true
})
export class TasksListComponent {

  toggleTaskCompletion(arg0: number) {
    throw new Error('Method not implemented.');
  }

  tasks$: Observable<Task[]>;
  newTask: string = '';

  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectAllTasks);
  }

  removeTask(taskId: number) {
    this.store.dispatch(removeTask({ taskId }));
  }

  addTask() {
    this.store.dispatch(addTask({ title: this.newTask.trim() }));
  }

  updateTaskStatus(taskId: number, newStatus: TaskStatus) {
    this.store.dispatch(updateTaskStatus({ taskId, newStatus }));
  }

}
