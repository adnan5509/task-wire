import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from '../task.model';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tasks-list',
  imports: [CommonModule, FormsModule, MatIconModule,
    MatButtonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  standalone: true
})
export class TasksListComponent {

  tasks$: Observable<Task[]> = new Observable<Task[]>();
  newTask: any;

  removeTask(_t14: number) {
    throw new Error('Method not implemented.');
  }
  addTask() {
    throw new Error('Method not implemented.');
  }


}
