import { Component, OnInit, Input } from "@angular/core";
import { MessageService } from "../message.service";
import { User } from "../User";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }
  save():void{
    this.userService.updateUser(this.user).subscribe(()=>this.goBack());
  }
}
