import { Subject } from 'rxjs/Subject';

import { User } from './user.model';

export class UserService {
    userChanged = new Subject<User[]>();
    editingUser = new Subject<number>();
    private users: User[] = [
    new User('jesus', 'gonzalez', 31),
    new User('bobby', 'Ricky', 23),
    new User('fighting', 'chicken', 12)
  ];

  getUsers() {
    return this.users.slice();
  }

  getUser(index: number) {
    return this.users[index];
  }

  userAdded(user: User) {
    console.log(this.users);
    this.users.push(user);
    this.userChanged.next(this.users.slice());
  }

  destroyUser(index: number) {
    this.users.splice(index, 1);
    this.userChanged.next(this.users.slice());
  }

  updateUser(index: number, newUser: User) {
    this.users[index] = newUser;
    this.userChanged.next(this.users.slice());
  }
}
