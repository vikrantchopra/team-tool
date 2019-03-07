import { Component, OnInit } from '@angular/core';
import { RetroService } from 'src/app/services/retro.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { UpdateIssueComponent } from '../update-issue/update-issue.component';

@Component({
  selector: 'app-read-issuedata',
  templateUrl: './read-issuedata.component.html',
  styleUrls: ['./read-issuedata.component.css']
})
export class ReadIssuedataComponent implements OnInit {

  items: Array<any>;
  item: any;
  displayedColumns: string[] = ['teamName', 'issue', 'owner', 'action', 'comments', 'issueDate', 'operations'];
  issueId: any;

  constructor(private firebaseService: RetroService, public dialog: MatDialog) { }

  ngOnInit() {
    this.firebaseService.getIssues()
      .subscribe(result => {
        this.items = result;
      })
  }

  viewDetails(value) {
    console.log("Team Name: " + value.teamName)
    this.dialog.open(UpdateIssueComponent, {
      width: '250px',
      data: value
      
    });
    //console.log("Team Name: " + data.teamName)
  }

  editDetails(id, value) {
    console.log("Team Name: " + value.teamName)
    console.log("Record ID: " + id)
    this.issueId = id;
    this.dialog.open(UpdateIssueComponent, {
      width: '250px',
      data: {issueId: id, teamName: value.teamName, issueDate: value.issueDate, issue: value.issue, owner: value.owner, action: value.action, comments: value.comments}
    });
  }

  delete(id) {
    this.firebaseService.delete(id);
  }

}
