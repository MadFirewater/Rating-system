import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-learn-process-list',
  templateUrl: './learn-process-list.component.html',
  styleUrls: ['./learn-process-list.component.scss']
})
export class LearnProcessListComponent implements OnInit {

  @Input() items: any[];

  constructor() { }

  ngOnInit() {
  }

}
