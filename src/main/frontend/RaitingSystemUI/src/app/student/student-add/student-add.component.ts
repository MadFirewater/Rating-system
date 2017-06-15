import { Component, OnInit } from '@angular/core';
import {FileUploader} from "ng2-file-upload";

const URL = 'http://localhost:8080/api/uploadStudents';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL});

  constructor() { }

  ngOnInit() {
  }

  uploadFile() {
    let lastItem = this.uploader.queue.length - 1;
    this.uploader.uploadItem(this.uploader.queue[lastItem]);
  }

}
