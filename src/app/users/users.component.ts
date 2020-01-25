import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { USERS } from "../users-data";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  selectedUser: User;
  users: User[] = USERS;
  isActive: boolean = true;

  onShowUsers(): void {
    this.isActive = !this.isActive;
    // console.log(this.isActive);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor() {}

  ngOnInit() {}
}
