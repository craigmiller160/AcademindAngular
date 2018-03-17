import { Component, OnInit } from '@angular/core';
import { ObservableUsersService } from './observable-user/observable-users.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit{

  user1Activated = false;
  user2Activated = false;

  constructor(private userService: ObservableUsersService) { }


  ngOnInit(): void {
    this.userService.userActivated.subscribe((id: number) => {
      if (+id === 1) {
        this.user1Activated = true;
      } else if (+id === 2) {
        this.user2Activated = true;
      }
    });
  }
}
