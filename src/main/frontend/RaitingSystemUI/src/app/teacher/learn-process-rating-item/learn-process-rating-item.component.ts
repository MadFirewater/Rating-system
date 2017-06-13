import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-learn-process-rating-item',
  templateUrl: './learn-process-rating-item.component.html',
  styleUrls: ['./learn-process-rating-item.component.scss']
})
export class LearnProcessRatingItemComponent implements OnInit {

  @Input() item: any;

  grades = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
