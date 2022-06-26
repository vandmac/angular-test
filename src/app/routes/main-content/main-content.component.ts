import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Subject, take, map } from 'rxjs';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

    subject = new Subject()
    behaviorSubject = new BehaviorSubject<number>(8)

    counter = 0
    counterBS = 0

    constructor(
        private route: ActivatedRoute,
        private titleService: Title
    ) { }


    ngOnInit(): void {
        // console.log('Path DATA obj :', this.route.snapshot.data)
        this.titleService.setTitle(this.route.snapshot.data['title'])


        this.subject.subscribe({
            next: (data: any) => { console.log('Sub :', data) },
            error: (error: Error) => { console.log('Error :', error) },
            complete: () => { console.log('Done') }
        })


        this.behaviorSubject.subscribe((data) => console.log('BS tick :', data))

    }


    onClickNextS(): void {
        this.counter += 1

        if (this.counter > 8) {

            this.subject.error('This is END')
            this.counter = 0

        } else {

            this.subject.next(this.counter)

        }

    }

    onClickNextBS(): void {
        this.counterBS += 2

        this.behaviorSubject.next(this.counterBS)
    }

    onClickFinishS(): void {
        this.counter = 0
        this.subject.complete()
    }


    createNewSubscription(): void {
        this.behaviorSubject
            .pipe(
                take(3),
                map((counterBS: number) => counterBS * 2.4))
            .subscribe(data => console.log('New sub :', data))
    }

}
