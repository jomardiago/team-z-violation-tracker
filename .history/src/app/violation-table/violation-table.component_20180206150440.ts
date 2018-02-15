import { Component, OnInit } from '@angular/core';
import { ViolationService } from '../services/violation.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-violation-table',
  templateUrl: './violation-table.component.html',
  styleUrls: ['./violation-table.component.css']
})
export class ViolationTableComponent implements OnInit {
  violations: any[];
  outstandingPoints: number = 0;
  selectedViolation: object;
  startDate = new Date();

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
    this.selectedViolation = violation;
  }
}
