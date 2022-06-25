import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription()

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    // console.log('Path Params :', this.route.snapshot.params)
    // console.log('Path Query Params :', this.route.snapshot.queryParams)

    const sub = this.moviesService.getMoviesByName$('lord')
      .subscribe(movies => console.log(movies))

    this.subscriptions.add(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
