import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ MatButtonModule, FormsModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  public name: string = 'Jean Jean';
  public complete: boolean = true;

  getComplete() {
    return this.complete ? 'Fini !' : 'En cours...';

    // if (this.complete)
    //   return "Fini ! "
    // else
    //   return "En cours..."
  }

  getBadgeVariant() {
    let variant = 'd-inline float-right badge text-bg-';

    return this.complete ? variant + 'success' : variant + 'warning';
  }

  getItemVariant() {
    let variant = 'list-group-item list-group-item-';

    return this.complete ? variant + 'success' : variant + 'warning';
  }

  getButtonText() {
    return this.complete ? 'Annuler' : 'Terminer';
  }

  toggleComplete() {
    this.complete = !this.complete;
  }
}
