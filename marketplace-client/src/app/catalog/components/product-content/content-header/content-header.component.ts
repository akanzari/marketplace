import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  selectedSize: string = 'COZY';
  @Output() toggleSize = new EventEmitter();

  constructor() { }

  toggleView(view) {
    this.selectedSize = view;
    this.toggleSize.emit({ size: view });
  }

  isSmallSelected(): boolean {
    return this.selectedSize === 'COZY';
  }

  isBigSelected(): boolean {
    return this.selectedSize === 'COMPACT';
  }

  ngOnInit() { }


}