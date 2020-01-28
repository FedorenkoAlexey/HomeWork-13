import { Component, OnInit } from "@angular/core";
import { User } from "../user";
// import { USERS } from "../users-data";
import { UserService } from "./user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  selectedUser: User;
  users: User[];
  isActive: boolean = true;

  onShowUsers(): void {
    this.isActive = !this.isActive;
    // console.log(this.isActive);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor(private userService: UserService) {}

  private getUsers(): void {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
    this.getUsers();
  }
}
