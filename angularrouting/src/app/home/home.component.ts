import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, interval } from 'rxjs';
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
    })

    this.routeSubscription = interval(1000).subscribe(count => {
      console.log(count);
    })
  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
