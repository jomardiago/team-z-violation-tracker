import { Component, OnInit } from '@angular/core';
import { ViolationService } from '../services/violation.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-violation-table',
  templateUrl: './violation-table.component.html',
  styleUrls: ['./violation-table.component.css']
})
export class ViolationTableComponent implements OnInit {
  violations: Observable<any[]>;
  constructor(private violationService: ViolationService) {
    this.violations = violationService.getAll();
  }

  ngOnInit() {
  }
}
