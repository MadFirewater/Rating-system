import {Component, OnInit} from '@angular/core';
import {FacultyService} from '../faculty.service';
import {Faculty} from '../faculty.model';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {

  faculties: Faculty[];

  constructor(private facultyService: FacultyService) {
  }

  ngOnInit() {
    this.facultyService.getFaculties()
      .subscribe((faculties: Faculty[]) => {
        this.faculties = faculties;
      });
  }

}
