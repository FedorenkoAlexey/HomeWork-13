import { Injectable } from "@angular/core";
import { User } from "../user";
import { USERS } from "../users-data";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  public getUsers(): User[] {
    return USERS;
  }
}
