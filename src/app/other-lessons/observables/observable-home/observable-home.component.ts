import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-observable-home',
  templateUrl: './observable-home.component.html',
  styleUrls: ['./observable-home.component.css']
})
export class ObservableHomeComponent implements OnInit, OnDestroy {

  numbersSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const myNumbers = Observable.interval(1000);
    this.numbersSubscription = myNumbers.subscribe(
      observer => console.log(observer)
    );

    const myObservable: Observable<string> = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => observer.next('first package'), 2000);
        setTimeout(() => observer.next('second package'), 4000);
        // setTimeout(() => observer.error('this does not work'), 5000);
        setTimeout(() => observer.complete(), 5000);
        setTimeout(() => observer.next('another package'), 6000);
      }
    );

    this.customSubscription = myObservable.subscribe(
      (data: string) => console.log(data),
    (error: string) => console.log(error),
      () => console.log('completed')
    );
  }

  ngOnDestroy(): void {
    this.numbersSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
