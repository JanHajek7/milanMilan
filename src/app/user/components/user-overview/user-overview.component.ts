import { Component, OnInit } from "@angular/core";
import { User } from "../../interafaces/user.interface";

@Component({
  selector: "app-user-overview",
  templateUrl: "./user-overview.component.html",
  styleUrls: ["./user-overview.component.scss"]
})
export class UserOverviewComponent implements OnInit {
  mojeData: Array<User>;

  constructor() {
    this.mojeData = [
      {
        id: 1,
        name: "honza",
        surname: "Hájek",
        age: 18,
        info: "info"
      },
      {
        id: 1,
        name: "honza",
        surname: "Hájek",
        age: 18
      },
      {
        id: 1,
        name: "honza",
        surname: "Hájek",
        age: 18
      },
      {
        id: 1,
        name: "honza",
        surname: "Hájek",
        age: 18
      },
      {
        id: 1,
        name: "honza",
        surname: "Hájek",
        age: 18
      }
    ];
  }

  ngOnInit() {}
}
