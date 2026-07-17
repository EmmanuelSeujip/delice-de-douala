import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface NewUser {
  nom: string;
  email: string;
  role: string;
  dateInscription: string;
}

@Component({
  selector: 'app-user-add-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-add-form.html',
  styleUrl: './user-add-form.css',
})
export class UserAddForm {
  @Output() userAdded = new EventEmitter<NewUser>();
  @Output() cancelled = new EventEmitter<void>();

  nom = '';
  email = '';
  role = 'Utilisateur';

  roles = ['Admin', 'Utilisateur', 'Modérateur'];

  onSubmit() {
    if (!this.nom.trim() || !this.email.trim()) return;

    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateInscription = today.toLocaleDateString('fr-FR', options);

    this.userAdded.emit({
      nom: this.nom.trim(),
      email: this.email.trim(),
      role: this.role,
      dateInscription,
    });

    this.reset();
  }

  onCancel() {
    this.reset();
    this.cancelled.emit();
  }

  private reset() {
    this.nom = '';
    this.email = '';
    this.role = 'Utilisateur';
  }
}
