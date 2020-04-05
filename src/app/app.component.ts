import { Component } from '@angular/core';
import { Observable, Subscription, Subscriber } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables-tutorial';
  divisibleByThreeObservable: Observable<{ isDivisibleByThree: false, number: 0 }>;

  firstSubscription: Subscription;
  SubscriberOneValue: number = 0;
  isSubscriberOnDivisble: boolean;

  ngOnInit() {
    this.divisibleByThreeObservable = Observable.create((Observer) => {
      let number = 0;
      setInterval(() => {
        if (number % 3 === 0) {
          Observer.next({ isDivisibleByThree: true, number: number });
                             } else {
          Observer.next({ isDivisibleByThree: false, number: number });
                                     }
                  number++;
                                                 }, 500);
                   }
   }               
   subscribe() {
    this.firstSubscription = this.divisibleByThreeObservable.subscribe({
      next: (value) => {
        console.log('Subscribe 1 number :' + value.number + ' ' + (value.isDivisibleByThree ? 'is' : 'isnot') + 'divisible by three.');
        this.SubscriberOneValue = value.number;
        this.isSubscriberOnDivisble = value.isDivisibleByThree;
                      }
                      });
            }
  Unsbscriber() {
    this.firstSubscription.unsubscribe();
    console.log('Subscriber unsubscribed from the observble');

                }
}


