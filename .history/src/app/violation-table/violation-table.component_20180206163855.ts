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

  constructor(private violationService: ViolationService) {
    violationService.getAll().subscribe(violations => {
      this.violations = violations;
      this.violations.forEach(violations => {
        this.outstandingPoints = this.outstandingPoints + violations.equivalentPoints;
      });
    });
  }

  ngOnInit() {
  }

  handleRowClicked(violation) {
    var now = new Date(violation.startDate);

    this.selectedViolation = {
      violationType: violation.violationType,
      equivalentPoints: violation.equivalentPoints,
      startDate: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
      endDate: violation.endDate
    };
  }

  addViolation() {
    var now = new Date();
    this.selectedViolation = {
      violationType: '',
      equivalentPoints: 0,
      startDate: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
      endDate: ''
    };
  }
}
