import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

const initialTasks = [
  new Task(
    0,
    'Promener le chien',
    false,
    'Dans le parc en bas de la rue.',
    new Date()
  ),
  new Task(
    5,
    'Faire le menage',
    true,
    'Aspirateur + serpilliere.',
    new Date('04/01/2023 09:00')
  ),
  new Task(
    28,
    'Faire les courses',
    true,
    'liste de courses: ...',
    new Date('04/02/2024')
  ),
];

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  public tasks: Task[] = []

  constructor() {
    this.updateTask(initialTasks)
  }

  public async updateTask(tasks: Task[]): Promise<void> {
    this.tasks = await new Promise<Task[]>((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks))
      }, 3000)
    })
  }

  public toggleComplete(id: number) {
    let task: Task|undefined = this.tasks.find(task => task.id == id)
    if (task)
      task.completed = !task.completed
  }
}
