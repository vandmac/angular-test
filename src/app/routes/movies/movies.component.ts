import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@shared/models/movie.model';
import { Observable, Subscription, of, map } from 'rxjs';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription()
  search: string = ''
  movies$: Observable<Movie[] | undefined>

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    // console.log('Path Params :', this.route.snapshot.params)
    // console.log('Path Query Params :', this.route.snapshot.queryParams)
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  onChange(inputValue: string): void {
    const sub = this.moviesService.getMoviesByName$(inputValue)
      .pipe(
        map(res => res.Search),
      )
      .subscribe(movies => this.movies$ = of(movies))

    this.subscriptions.add(sub)
  }
}
