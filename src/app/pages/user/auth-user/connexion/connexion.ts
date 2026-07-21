import { Component } from '@angular/core';
import { AuthUser } from "../auth-user";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  imports: [AuthUser,FormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css',
})
export class Connexion {
  user = {
    email: '',
    password: ''
  };

  soumettre(event: Event) {
    event.preventDefault();
    alert("Connexion réussie");
    this.user={
      email: '',
      password: ''
    }
  }
}
