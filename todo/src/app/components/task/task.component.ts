import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { Task } from '../../class/task.model';
import { DatePipe } from '@angular/common';
import { TodolistService } from '../../services/todolist.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatButtonModule, FormsModule, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) public task!: Task;

  constructor(public todo: TodolistService) {}

  getComplete() {
    return this.task.completed ? 'Fini !' : 'En cours...';

    // if (this.task.completed)
    //   return "Fini ! "
    // else
    //   return "En cours..."
  }

  getBadgeVariant() {
    let variant = 'd-inline float-right badge text-bg-';

    return this.task.completed ? variant + 'success' : variant + 'warning';
  }

  getItemVariant() {
    let variant = 'list-group-item list-group-item-';

    return this.task.completed ? variant + 'success' : variant + 'warning';
  }

  getButtonText() {
    return this.task.completed ? 'Annuler' : 'Terminer';
  }

  toggleComplete() {
  this.todo.toggleComplete(this.task.id)
  }
}
