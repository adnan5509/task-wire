import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';

export const routes: Routes = [
    {
        path: 'tasks',
        component: TasksListComponent
    }
];
