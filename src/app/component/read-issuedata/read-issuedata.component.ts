import { Component, OnInit } from '@angular/core';
import { RetroService } from 'src/app/services/retro.service';

@Component({
  selector: 'app-read-issuedata',
  templateUrl: './read-issuedata.component.html',
  styleUrls: ['./read-issuedata.component.css']
})
export class ReadIssuedataComponent implements OnInit {

  items: Array<any>;
  displayedColumns: string[] = ['teamName', 'issue', 'owner', 'action', 'comments', 'issueDate'];

  constructor(private firebaseService: RetroService) { }

  ngOnInit() {
    this.firebaseService.getIssues()
      .subscribe(result => {
        this.items = result;
      })
  }

}
