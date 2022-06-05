import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private titleService: Title
    ) { }


    ngOnInit(): void {
        console.log('Path DATA obj :', this.route.snapshot.data)

        this.titleService.setTitle(this.route.snapshot.data['title'])
    }

}
