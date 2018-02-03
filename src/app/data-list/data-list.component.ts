import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent {

  @Input() dataArray;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    
  }
}
