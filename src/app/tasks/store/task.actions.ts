import { createAction, props } from "@ngrx/store";
import { TaskStatus } from "../task.model";

export const loadTasks = createAction('[Task] Load Tasks');
export const addTask = createAction('[Task] Add Task', props<{ title: string }>());
export const removeTask = createAction('[Task] Remove Task', props<{ taskId: number }>());
export const updateTaskStatus = createAction('[Task] Update Task Status', props<{ taskId: number, newStatus: TaskStatus }>());