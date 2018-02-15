import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ViolationService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/violations').valueChanges();
  }

  save(violation) {
    const violations = this.db.list('/violations');
    violations.push(violation);
  }
}
