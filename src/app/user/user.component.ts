import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('firstName') firstInputRef: ElementRef;
  @ViewChild('lastName') lastInputRef: ElementRef;
  @ViewChild('age') ageInputRef: ElementRef;
  user: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addUser(form: NgForm) {
    //   const fname = this.firstInputRef.nativeElement.value;
    //   const lName = this.lastInputRef.nativeElement.value;
    //   const ageUser = this.ageInputRef.nativeElement.value;
    //   const userAdded = new User(fname, lName, ageUser);
    //   this.userService.userAdded(userAdded);
    // }
    console.log(form);
  }
}
