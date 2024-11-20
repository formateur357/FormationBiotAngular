import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { Task } from './class/task.model';
import { DecimalPipe } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, DecimalPipe, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public count: number;

  public tasks: Task[] = [];

  constructor() {
    this.tasks.push(
      new Task(
        0,
        'Promener le chien',
        false,
        'Dans le parc en bas de la rue.',
        new Date()
      )
    );
    this.tasks.push(
      new Task(
        5,
        'Faire le menage',
        true,
        'Aspirateur + serpilliere.',
        new Date('04/01/2023 09:00')
      )
    );
    this.tasks.push(
      new Task(
        28,
        'Faire les courses',
        true,
        'liste de courses: ...',
        new Date('04/02/2024')
      )
    );

    this.count = this.tasks.filter((task) => task.completed).length;
  }

  public toggleCount(state: boolean): void {
    this.count += state ? 1 : -1;
  }

  public getPercent(): number {
    return this.tasks.length > 0 ? (this.count / this.tasks.length) * 100 : 0;
  }

  public getTextColor(): string {
    console.log('ici');
    let color = this.getPercent() > 0 ? 'orange' : 'red';
    color = this.getPercent() == 100 ? 'green' : color;
    return color;
  }

  public get textColor(): string {
    console.log("ici getter")
    let color = this.getPercent() > 0 ? 'orange' : 'red';
    color = this.getPercent() == 100 ? 'green' : color;
    return color;
  }
}
