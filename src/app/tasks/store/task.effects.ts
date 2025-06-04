import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, tap, withLatestFrom } from "rxjs/operators";
import {
    addTask,
    loadTasks,
    loadTasksFailure,
    loadTasksSuccess,
    removeTask,
    updateTaskStatus,
} from "./task.actions";
import { Store } from "@ngrx/store";
import { selectAllTasks } from "./task.selectors";

@Injectable()
export class TaskEffects {
    private readonly TASKS_STORAGE_KEY = 'tasks';

    private actions$ = inject(Actions);
    private store = inject(Store);

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTasks),
            switchMap(() => {
                try {
                    const loadedTasks = localStorage.getItem(this.TASKS_STORAGE_KEY);
                    const tasks = loadedTasks ? JSON.parse(loadedTasks) : [];
                    return of(loadTasksSuccess({ tasks }));
                } catch (error) {
                    return of(
                        loadTasksFailure({ error: 'Failed to load tasks from local storage.' })
                    );
                }
            })
        )
    );

    persistTasks$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(addTask, removeTask, updateTaskStatus),
                withLatestFrom(this.store.select(selectAllTasks)),
                tap(([action, tasks]) => {
                    try {
                        console.log('Persisting tasks to local storage:', tasks);
                        localStorage.setItem(this.TASKS_STORAGE_KEY, JSON.stringify(tasks));
                    } catch (error) {
                        console.error('Failed to persist tasks to local storage:', error);
                    }
                })
            ),
        { dispatch: false }
    );
}
