import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styleUrls: ['./routing-user.component.css']
})
export class RoutingUserComponent implements OnInit {

  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };
    this.route.params.subscribe(params => this.user = {id: params.id, name: params.name});
  }

}
