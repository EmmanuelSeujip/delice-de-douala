import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../../models/person';
import { AuthUser } from "../auth-user";
@Component({
  selector: 'app-inscription',
  imports: [FormsModule, AuthUser],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  user: User = {
    nom: "",
    subname: "",
    email: "",
    password: ""
  }
  confirmPassword = ""

  soumettre(event: Event) {
    event.preventDefault();
    if (this.user.password !== this.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
    } else {
      alert("Inscription reussie");
      this.user={
          nom: "",
          subname: "",
          email: "",
          password: ""
      }
      this.confirmPassword=""
    }
  }
}
