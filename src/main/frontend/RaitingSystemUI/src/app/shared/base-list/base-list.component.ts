import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit, OnChanges {

  @Input() items: any[];
  @Input() entityType: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
