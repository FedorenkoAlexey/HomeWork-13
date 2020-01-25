import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { USERS } from "../users-data";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 11,
    userName: "Bret",
    firstName: "Leanne",
    lastName: "Graham",
    sex: "male",
    age: 27
  };

  public users: User[] = USERS;

  constructor() {}

  ngOnInit() {}
}
