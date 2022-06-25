import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  testObservable$: Observable<any> = new Observable(subscriber => {
    subscriber.next('HI Guys :)')

    setTimeout(() => {
      subscriber.complete()
    }, 2000)
  })


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Path Params :', this.route.snapshot.params)
    console.log('Path Query Params :', this.route.snapshot.queryParams)

    // this.testObservable.subscribe({
    //   next: (data) => { console.log('Data from Observable :', data) },
    //   error: (error) => console.log(error),
    //   complete: () => console.log('Complete Observable')
    // })


    this.testObservable$.subscribe(data => {
      console.log('Other way :', data)
    })

  }

}
