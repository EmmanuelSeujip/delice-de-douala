import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/person';
import { AuthUser } from "../auth-user";
@Component({
  selector: 'app-inscription',
  imports: [FormsModule, AuthUser, JsonPipe],
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
    
  soumettre(event:Event){
    event.preventDefault();
    console.log(this.user);
  }
}
