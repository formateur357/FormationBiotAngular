import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  public name : string = "Jean Jean"
  public complete : boolean = true

  getComplete() {
    return this.complete ? "Fini !" : "En cours..."

    // if (this.complete)
    //   return "Fini ! "
    // else
    //   return "En cours..."
  }

  getBadgeVariant() {
    let variant = "d-inline float-right badge text-bg-"

    return this.complete ? variant + "success" : variant + "warning"
  }

  getItemVariant() {
    let variant = "list-group-item list-group-item-"

    return this.complete ? variant + "success" : variant + "warning"
  }
}
