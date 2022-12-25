import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  //intervalSubscription: Subscription = new Subscription;
  routeSubscription: Subscription = new Subscription;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.data.subscribe((data: Params) => {
      console.log(data, 'data+++++');
    }, error => {
      console.log(error)
    })

    // this.routeSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    let customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error('count is greater than 3');
        }
        if (count > 2) {
          observer.complete();
        }
        count++;
      }, 1000)
    });

    this.routeSubscription = customObservable.pipe(map((data: any) => {
      return 'count is ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log('count is greater than 3');
    }, () => {
      console.log('complete');
    })

  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
