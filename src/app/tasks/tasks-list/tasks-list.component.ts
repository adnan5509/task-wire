import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task, TaskStatus } from '../task.model';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../task.service';

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

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }

  removeTask(taskId: number) {
    this.taskService.removeTask(taskId);
  }

  addTask() {
    if (this.newTask.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTask.trim(),
        status: 'pending'
      }
      this.taskService.addTask(newTask);
    }

  }

  updateTaskStatus(taskId: number, newStatus: TaskStatus) {
    this.taskService.updateTaskStatus(taskId, newStatus);
  }


}
