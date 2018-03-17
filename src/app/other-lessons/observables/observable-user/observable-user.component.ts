import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-observable-user',
  templateUrl: './observable-user.component.html',
  styleUrls: ['./observable-user.component.css']
})
export class ObservableUserComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
  }

}
