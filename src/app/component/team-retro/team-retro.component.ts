import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-team-retro',
  templateUrl: './team-retro.component.html',
  styleUrls: ['./team-retro.component.css']
})
export class TeamRetroComponent implements OnInit {

  retroForm = new FormGroup({
    teamName: new FormControl(''),
    issueDate: new FormControl(''),
    issue: new FormControl(''),
    owner: new FormControl(''),
    action: new FormControl(''),
    comments: new FormControl('')
  });

  myControl = new FormControl();
  teams: string[] = ['Indus', 'Nile', 'Rhine', 'BlackPearl', 'FlyingDutchman', 'IHE'];
  filteredTeams: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredTeams = this.retroForm.controls['teamName'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.teams.filter(team => team.toLowerCase().includes(filterValue));
  }

  onSubmit(value) {
    
  }

}
