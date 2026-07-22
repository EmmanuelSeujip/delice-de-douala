import { Component } from '@angular/core';
import { AuthUser } from "../auth-user";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  imports: [AuthUser,FormsModule,ReactiveFormsModule],
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
