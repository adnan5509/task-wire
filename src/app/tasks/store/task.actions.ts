import { createAction, props } from "@ngrx/store";
import { Task, TaskStatus } from "../task.model";

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction(
    '[Task] Load Tasks Success',
    props<{ tasks: Task[] }>()
);
export const loadTasksFailure = createAction(
    '[Task] Load Tasks Failure',
    props<{ error: string }>()
);
export const addTask = createAction('[Task] Add Task', props<{ title: string }>());
export const removeTask = createAction('[Task] Remove Task', props<{ taskId: number }>());
export const updateTaskStatus = createAction('[Task] Update Task Status', props<{ taskId: number, newStatus: TaskStatus }>());