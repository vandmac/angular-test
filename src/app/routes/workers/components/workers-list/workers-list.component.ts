import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { filter, map, take } from "rxjs";

import { Worker } from '@shared/models/worker.model';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
    selector: 'app-workers-list',
    templateUrl: './workers-list.component.html',
    styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {
    workers: Worker[] = [];
    selectedWorker: Worker | null = null

    constructor(
        private workersService: WorkersService,
        private fb: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.workersService.getWorkers$()
            .pipe(
                filter((data) => data.length > 0),
                map((workers) => {
                    return workers.map(item => {
                        item.firstName = item.firstName.toLowerCase()
                        return item
                    })
                }),
                take(1))
            .subscribe(data => {
                this.workers = data
            })
    }

    edit(worker: Worker): void {
        this.selectedWorker = worker

        this.router.navigate(['/workers/details', worker.id])

        // this.workerForm.patchValue({
        //     workerName: worker.firstName,
        //     workerLastName: worker.lastName,
        //     workerEmail: worker.email,
        //     workerPlaceOfOrigin: worker.placeOfOrigin,
        //     workerYearsWorked: worker.yearsWorked
        // })

        // this.sumbitBtn.nativeElement.innerHTML = 'Edit'
    }

}