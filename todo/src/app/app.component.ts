import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { Task } from './class/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public count: number

  public tasks: Task[] = []

  constructor() {
    this.tasks.push(
      new Task(0, 'Promener le chien', false, 'Dans le parc en bas de la rue.')
    );
    this.tasks.push(
      new Task(5, 'Faire le menage', true, 'Aspirateur + serpilliere.')
    );
    this.tasks.push(
      new Task(28, 'Faire les courses', true, 'liste de courses: ...')
    );

    this.count = this.tasks.filter(task => task.completed).length
  }

  public toggleCount(state: boolean): void {
    this.count += state ? 1 : -1;
  }
}
