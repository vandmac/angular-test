import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

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
        this.workers = this.workersService.getWorkers()

    }

    edit(worker: Worker): void {
        this.selectedWorker = worker

        this.router.navigate(['/workers/details'])

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