import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styleUrls: ['./routing-user.component.css']
})
export class RoutingUserComponent implements OnInit, OnDestroy {

  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };
    // Only necessary if the component should be re-created while having been already loaded
    this.paramsSubscription = this.route.params.subscribe(params => this.user = {id: params.id, name: params.name});
  }

  ngOnDestroy(): void {
    // Not necessary because angular handles cleaning up router subscriptions. Only necessary for other observables
    this.paramsSubscription.unsubscribe();
  }

}
