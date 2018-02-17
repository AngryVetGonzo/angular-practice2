import { Subject } from 'rxjs/Subject';

import { User } from './user.model';

export class UserService {
    userChanged = new Subject<User[]>();
    private users: User[] = [
    new User('jesus', 'gonzalez', 31),
    new User('bobby', 'Ricky', 23),
    new User('fighting', 'chicken', 12)
  ];

  getUsers() {
    return this.users.slice();
  }

  userAdded(user: User) {
    console.log(this.users);
    this.users.push(user);
    this.userChanged.next(this.users.slice());
  }

  destroyUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
