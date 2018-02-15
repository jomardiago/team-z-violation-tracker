import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ViolationService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/violations').snapshotChanges();
  }

  save(violation) {
    this.db.list('/violations').push(violation);
  }

  update(key, violation) {
    console.log(key);
    console.log(violation);
    // this.db.object('/violations/' + key).update(violation);
  }
}
