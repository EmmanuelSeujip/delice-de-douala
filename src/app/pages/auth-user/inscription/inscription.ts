import { Component } from '@angular/core';
import { User } from '../../../models/person';
import { FormsModule } from '@angular/forms';
import { AuthUser } from "../auth-user";
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-inscription',
  imports: [FormsModule, AuthUser,JsonPipe],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  user:User={
    nom:"",
    subname:"",
    email:"",
    password:""
  }
  confirmPassword=""
}
