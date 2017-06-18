import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() link: string;
  @Input() pageTitle: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect() {
    this.router.navigate([this.link]);
  }

}
