import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

    subject = new Subject()
    counter = 0

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

    }


    onClickNext(): void {
        this.counter += 1

        if (this.counter > 8) {

            this.subject.error('This is END')
            this.counter = 0

        } else {

            this.subject.next(this.counter)

        }

    }

    onClickFinish(): void {
        this.counter = 0
        this.subject.complete()
    }

}
