import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscribable } from 'rxjs';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  imports: [CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  tasks$: Observable<Task[]> = new Observable<Task[]>();
  deleteTask(arg0: any) {
    throw new Error('Method not implemented.');
  }
  toggleTask(_t8: any) {
    throw new Error('Method not implemented.');
  }

}
