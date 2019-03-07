import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RetroService } from 'src/app/services/retro.service';

@Component({
  selector: 'app-update-issue',
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css']
})
export class UpdateIssueComponent implements OnInit {

  item: any;
  updateForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private firebaseService: RetroService) { }

  initializeForm() {
    this.updateForm = this.fb.group({
      owner: [this.data.owner],
      action: [this.data.action],
      teamName: [this.data.teamName],
      issue: [this.data.issue],
      issueDate: [this.data.issueDate],
      comments: [this.data.comments]
    })
  }

  ngOnInit() {
    this.item = this.data;
    this.initializeForm();
  }

  onSubmit(value) {
    this.firebaseService.update(this.data.issueId,value);
  }

}
