import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-list-item',
  templateUrl: './base-list-item.component.html',
  styleUrls: ['./base-list-item.component.scss']
})
export class BaseListItemComponent implements OnInit, OnChanges {

  @Input() item: any;
  @Input() entityType: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
