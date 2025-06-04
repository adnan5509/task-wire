import { createReducer, on } from "@ngrx/store";
import { Task, TaskStatus } from "../task.model";
import { addTask, removeTask, updateTaskStatus } from "./task.actions";

export interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
}

export const initialTaskState: TaskState = {
    tasks: [],
    loading: false,
    error: null
}

export const taskReducer = createReducer(
    initialTaskState,
    on(addTask, (taskState, { title }) => ({
        ...taskState,
        tasks: [...taskState.tasks, { id: Date.now(), title, status: 'pending' as TaskStatus }],
    })
    ),
    on(removeTask, (taskState, { taskId }) => ({
        ...taskState,
        tasks: taskState.tasks.filter(task => task.id !== taskId)
    })
    ),
    on(updateTaskStatus, (taskState, { taskId, newStatus }) => ({
        ...taskState,
        tasks: taskState.tasks.map(
            task => task.id === taskId ? { ...task, status: newStatus } : task
        )
    })
    )
)