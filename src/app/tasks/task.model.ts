export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

export type TaskStatus = 'pending' | 'in-progress' | 'completed';