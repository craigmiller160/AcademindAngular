import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObservableUsersService } from './observable-users.service';

@Component({
  selector: 'app-observable-user',
  templateUrl: './observable-user.component.html',
  styleUrls: ['./observable-user.component.css']
})
export class ObservableUserComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private usersService: ObservableUsersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  onActivate(): void {
    this.usersService.userActivated.next(this.id);
  }

}
