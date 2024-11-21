import { Component } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';
import { DecimalPipe, NgStyle } from '@angular/common';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [TaskComponent, DecimalPipe, NgStyle],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  public count: number;

  constructor(public todo: TodolistService) {
    this.count = this.todo.tasks.filter((task) => task.completed).length;
  }

  public getPercent(): number {
    return this.todo.tasks.length > 0
      ? (this.count / this.todo.tasks.length) * 100
      : 0;
  }

  public getTextColor(): string {
    console.log('ici');
    let color = this.getPercent() > 0 ? 'orange' : 'red';
    color = this.getPercent() == 100 ? 'green' : color;
    return color;
  }

  public get textColor(): string {
    console.log('ici getter');
    let color = this.getPercent() > 0 ? 'orange' : 'red';
    color = this.getPercent() == 100 ? 'green' : color;
    return color;
  }
}
