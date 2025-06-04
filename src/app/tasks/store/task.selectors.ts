import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskState } from "./task.reducer";

export const selectTasks = createFeatureSelector<TaskState>('task');

export const selectAllTasks = createSelector(
    selectTasks,
    (state) => state.tasks
);