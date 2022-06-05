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
  // workers: Worker[] = [];
  // selectedWorker: Worker | null = null

  // small = Size.small
  // medium = Size.medium
  // big = Size.big

  // workerForm: FormGroup;

  constructor(
    private workersService: WorkersService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {

  }

  handleClick(flag: boolean): void {
    console.log(flag)
    this.toggleGreenText = !this.toggleGreenText
  }
}
