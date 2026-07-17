import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddForm, NewUser } from '../../../components/admin/user-management/user-add-form/user-add-form';

interface User extends NewUser {
  id: number;
}

@Component({
  selector: 'app-user-management',
  imports: [CommonModule, UserAddForm],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement {
  isModalOpen = signal(false);

  users = signal<User[]>([
  ]);

  private nextId = 2;

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onUserAdded(newUser: NewUser) {
    this.users.update(list => [
      ...list,
      { ...newUser, id: this.nextId++ },
    ]);
    this.closeModal();
  }
}
