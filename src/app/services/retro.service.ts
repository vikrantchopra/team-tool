import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RetroService {

  constructor(private db: AngularFirestore) { }

  addIssue(value) {
    return this.db.collection('issues').add({
      teamName: value.teamName,
      issueDate: value.issueDate,
      issue: value.issue,
      owner: value.owner,
      action: value.action,
      comments: value.comments
    });
  }
}
