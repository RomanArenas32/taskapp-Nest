import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import {v4} from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'Some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTask() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);

    return this.tasks
  }

  getTaskById(id: string) : Task{
    return this.tasks.find(task => task.id === id)
  }

  updateTask(id:string, updateFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updateFields);
    this.tasks =  this.tasks.map(task => (task.id === id ? newTask : task));
    return newTask;
  }

  deleteTask(id: string) {
    return this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
