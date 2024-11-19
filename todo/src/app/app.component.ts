import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public count: number = 2;

  public name1: string = 'Toto';
  public name2: string = 'Michel';
  public name3: string = 'Jean-louis';

  public complete1: boolean = false;
  public complete2: boolean = true;
  public complete3: boolean = true;

  public toggleCount(state: boolean): void {
    this.count += state ? 1 : -1;
  }
}
