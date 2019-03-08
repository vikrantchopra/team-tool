import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RetroService } from 'src/app/services/retro.service';

@Component({
  selector: 'app-delete-issue',
  templateUrl: './delete-issue.component.html',
  styleUrls: ['./delete-issue.component.css']
})
export class DeleteIssueComponent implements OnInit {

  deleteForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private firebaseService: RetroService) { }

  /*initializeForm() {
    this.deleteForm = this.fb.group({
      owner: [this.data.owner],
      action: [this.data.action],
      teamName: [this.data.teamName],
      issue: [this.data.issue],
      issueDate: [this.data.issueDate],
      comments: [this.data.comments]
    })
  }*/

  ngOnInit() {
    console.log("ID: " + this.data.issueId)
  }

  delete() {console.log("Function called")
    this.firebaseService.delete(this.data.issueId);
  }

}
