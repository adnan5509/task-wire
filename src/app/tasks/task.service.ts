import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly TASKS_STORAGE_KEY = 'tasks';
  tasks = new BehaviorSubject<Task[]>([]);

  constructor() { }

  loadTasks() {
    try {
      const storedTasks = localStorage.getItem(this.TASKS_STORAGE_KEY);
      if (storedTasks) {
        const tasks: Task[] = JSON.parse(storedTasks);
        this.tasks.next(tasks);
      }
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
    }
  }

  /**
   * Returns an observable that emits the current list of tasks.
   * This allows components to subscribe and react to changes in the task list.
   */
  getTasks() {
    return this.tasks.asObservable();
  }

  addTask(task: Task) {
    const currentTasks = this.tasks.getValue();
    const updatedTasks = [...currentTasks, task];
    this.tasks.next(updatedTasks);
    this.saveTasks(updatedTasks);
  }

  removeTask(taskId: number) {
    const currentTasks = this.tasks.getValue();
    const updatedTasks = currentTasks.filter(task => task.id !== taskId);
    this.tasks.next(updatedTasks);
    this.saveTasks(updatedTasks);
  }

  saveTasks(tasks: Task[]) {
    try {
      localStorage.setItem(this.TASKS_STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }
}
