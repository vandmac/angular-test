import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Worker } from '@shared/models/worker.model';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
    selector: 'app-worker-details',
    templateUrl: './worker-details.components.html',
    styleUrls: ['./worker-details.components.scss']
})
export class WorkerDetailsComponent implements OnInit {
    workerForm: FormGroup;
    selectedWorker: Worker | null = null

    get workersLength(): number {
        return this.workersService.getWorkerLength()
    }

    constructor(
        private workersService: WorkersService,
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        const { worker } = this.route.snapshot.data
        this.selectedWorker = worker;

        // console.log('Show Data :', this.route.snapshot.data)
        this.initForm(worker)

    }

    initForm(worker?: Worker): void {

        this.workerForm = this.fb.group({
            workerName: [worker?.firstName, Validators.required],
            workerLastName: [worker?.lastName],
            workerEmail: [worker?.email],
            workerPlaceOfOrigin: [worker?.placeOfOrigin],
            workerYearsWorked: [worker?.yearsWorked, Validators.required]

        })
    }

    onSubmit(isValide: boolean) {
        const newWorker: Worker = {
            id: this.selectedWorker ? this.selectedWorker.id : this.workersLength,
            firstName: this.workerForm.get('workerName')?.value,
            lastName: this.workerForm.get('workerLastName')?.value,
            email: this.workerForm.get('workerEmail')?.value,
            placeOfOrigin: this.workerForm.get('workerPlaceOfOrigin')?.value,
            yearsWorked: this.workerForm.get('workerYearsWorked')?.value
        }

        if (isValide && this.selectedWorker) {
            this.workersService.editWorker(newWorker)
            //   this.sumbitBtn.nativeElement.innerHTML = 'Add Worker'
        } else if (isValide) {
            this.workersService.addNewWorker(newWorker)
        }

        this.workerForm.reset()
        this.router.navigate(['/workers'])
    }
}