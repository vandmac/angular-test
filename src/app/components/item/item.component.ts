import { Component, Input, Output, EventEmitter, SimpleChange, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() itemTitle: string = '';
  @Output() tmpOutput: EventEmitter<boolean> = new EventEmitter()


  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Item Component: What we change? :', changes)
  }


  ngOnInit(): void {
    // console.log('Item Component: I was created')
  }


  onClick(): void {
    this.tmpOutput.emit()
  }
}
