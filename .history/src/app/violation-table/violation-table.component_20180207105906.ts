import { Component, OnInit } from '@angular/core';
import { ViolationService } from '../services/violation.service';
import { Observable } from 'rxjs/Observable';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-violation-table',
  templateUrl: './violation-table.component.html',
  styleUrls: ['./violation-table.component.css']
})
export class ViolationTableComponent implements OnInit {
  violations: any[];
  outstandingPoints: number = 0;
  selectedViolation: object;
  startDate: NgbDateStruct;
  violationClassHolder;
  addViolationTag: boolean = true;
  violationKey: string;

  constructor(private violationService: ViolationService) {
    this.violationService.getAll().subscribe(snapshot => {
      var violationsCollection = [];
      this.outstandingPoints = 0;
      snapshot.forEach(data => {
        violationsCollection.push({
          key: data.key,
          values: data.payload.val()
        });
        this.outstandingPoints = this.outstandingPoints + data.payload.val().equivalentPoints;
      });

      this.violations = violationsCollection;
    })
  }

  ngOnInit() {
  }

  handleRowClicked(key, violation) {
    var now = new Date(violation.startDate);
    this.violationClassHolder = violation;
    this.violationKey = key;

    this.selectedViolation = {
      violationType: violation.violationType,
      equivalentPoints: violation.equivalentPoints,
      startDate: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
      endDate: violation.endDate
    };

    this.addViolationTag = false;
  }

  addViolation() {
    var now = new Date();
    var endDate = now.getFullYear() + "-" + ((now.getMonth() + 7) < 12 ? '0' + (now.getMonth() + 7) : (now.getMonth() + 7)) + "-" + (now.getDate() < 10 ? '0' + now.getDate() : now.getDate());
    this.selectedViolation = {
      violationType: '',
      equivalentPoints: 0,
      startDate: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
      endDate: endDate
    };

    this.addViolationTag = true;
  }
}
