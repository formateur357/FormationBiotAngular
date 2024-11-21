import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodolistComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
