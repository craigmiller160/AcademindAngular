import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-error-page',
  templateUrl: './routing-error-page.component.html',
  styleUrls: ['./routing-error-page.component.css']
})
export class RoutingErrorPageComponent implements OnInit {

  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.data.message;
    this.route.data.subscribe(data => this.errorMessage = data.message);
  }

}
