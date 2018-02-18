import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  @ViewChild('f') userForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedUserIndex: number;
  editedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.editingUser
      .subscribe(
        (index: number) => {
          this.editedUserIndex = index;
          this.editMode = true;
          this.editedUser = this.userService.getUser(index);
          this.userForm.setValue({
            firstName: this.editedUser.firstName,
            lastName: this.editedUser.lastName,
            age: this.editedUser.age
          });
        }
      );
  }

  onSubmit(form: NgForm) {
      const value = form.value;
      const userAdded = new User(value.firstName, value.lastName, value.age);
      if (this.editMode) {
        this.userService.updateUser(this.editedUserIndex, userAdded);
      } else {
        this.userService.userAdded(userAdded);
      }
      this.editMode = false;
      form.reset();
    }

  onClear() {
    this.userForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.userService.destroyUser(this.editedUserIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
