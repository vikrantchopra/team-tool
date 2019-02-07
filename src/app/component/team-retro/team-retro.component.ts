import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { RetroService } from '../../services/retro.service';

@Component({
  selector: 'app-team-retro',
  templateUrl: './team-retro.component.html',
  styleUrls: ['./team-retro.component.css']
})
export class TeamRetroComponent implements OnInit {

  /*retroForm = new FormGroup({
    teamName: new FormControl(''),
    issueDate: new FormControl(''),
    issue: new FormControl(''),
    owner: new FormControl(''),
    action: new FormControl(''),
    comments: new FormControl('')
  });*/
  retroForm: FormGroup;

  initializeForm() {
    this.retroForm = new FormGroup({
      teamName: new FormControl('', Validators.required),
      issueDate: new FormControl('', Validators.required),
      issue: new FormControl('', Validators.required),
      owner: new FormControl('', Validators.required),
      action: new FormControl('', Validators.required),
      comments: new FormControl('', Validators.required)
    });
  }

  myControl = new FormControl();
  teams: string[] = ['Indus', 'Nile', 'Rhine', 'BlackPearl', 'FlyingDutchman', 'IHE'];
  filteredTeams: Observable<string[]>;

  validation_messages = {
    'teamName': [
      { type: 'required', message: 'Team Name is required.' }
    ],
    'issueDate': [
      { type: 'required', message: 'Team Name is required.' }
    ],
    'issue': [
      { type: 'required', message: 'Issue is required.' }
    ],
    'owner': [
      { type: 'required', message: 'Issue owner is required.' },
    ],
    'action': [
      { type: 'required', message: 'Action is required.' },
    ]
  };

  constructor(private firebaseService: RetroService) { }

  ngOnInit() {
    this.initializeForm();

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
    this.firebaseService.addIssue(value)
      .then(
        res => {
          this.initializeForm();
          //this.router.navigate(['/home']);
        }
      )
  }

}
