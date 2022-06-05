import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Worker } from '@shared/models/worker.model';
import { WorkersService } from 'src/app/services/workers.service';

// export enum Size {
//   small = 'small',
//   medium = 'medium',
//   big = 'big'
// }

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  @ViewChild('sumbitBtn') sumbitBtn: ElementRef

  inputValue: number = 0
  toggleGreenText: boolean = false
  newDate = new Date();
  workers: Worker[] = [];
  selectedWorker: Worker | null = null

  // small = Size.small
  // medium = Size.medium
  // big = Size.big

  workerForm: FormGroup;

  constructor(
    private workersService: WorkersService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.workers = this.workersService.getWorkers()
    this.initForm()
  }

  edit(worker: Worker): void {
    this.selectedWorker = worker

    this.workerForm.patchValue({
      workerName: worker.firstName,
      workerLastName: worker.lastName,
      workerEmail: worker.email,
      workerPlaceOfOrigin: worker.placeOfOrigin,
      workerYearsWorked: worker.yearsWorked
    })

    this.sumbitBtn.nativeElement.innerHTML = 'Edit'
  }

  handleClick(flag: boolean): void {
    console.log(flag)
    this.toggleGreenText = !this.toggleGreenText
  }

  initForm(): void {
    this.workerForm = this.fb.group({
      workerName: ['', Validators.required],
      workerLastName: [''],
      workerEmail: [''],
      workerPlaceOfOrigin: [''],
      workerYearsWorked: [, Validators.required]

    })
  }

  onSubmit(isValide: boolean) {
    const newWorker: Worker = {
      id: this.selectedWorker ? this.selectedWorker.id : this.workers.length,
      firstName: this.workerForm.get('workerName')?.value,
      lastName: this.workerForm.get('workerLastName')?.value,
      email: this.workerForm.get('workerEmail')?.value,
      placeOfOrigin: this.workerForm.get('workerPlaceOfOrigin')?.value,
      yearsWorked: this.workerForm.get('workerYearsWorked')?.value
    }

    if (isValide && this.selectedWorker) {
      this.workersService.editWorker(newWorker)
      this.sumbitBtn.nativeElement.innerHTML = 'Add Worker'
    } else if (isValide) {
      this.workersService.addNewWorker(newWorker)
    }

    this.workerForm.reset()
  }

}
