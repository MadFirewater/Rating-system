import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-learn-process-list-item',
  templateUrl: './learn-process-list-item.component.html',
  styleUrls: ['./learn-process-list-item.component.scss']
})
export class LearnProcessListItemComponent implements OnInit {

  @Input() item: any;

  entity = {
    subject: 'Програмування',
    group: 'ПЗ-144'
  };

  constructor() { }

  ngOnInit() {
  }

}
