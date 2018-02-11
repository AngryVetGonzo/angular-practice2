import { User } from './user.model';

export class UserService {
  private users: User[] = [
    new User('jesus', 'gonzalez'),
    new User('bobby', 'Ricky'),
    new User('fighting', 'chicken')
  ];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
