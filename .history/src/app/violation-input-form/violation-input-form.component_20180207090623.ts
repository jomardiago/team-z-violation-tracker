import { Component, OnInit, Input } from '@angular/core';
import { ViolationTypeServiceService } from '../services/violation-type-service.service';
import { FirebaseListObservable } from 'angularfire2/database';

const now = new Date();

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  @Input() selectedViolation;
  @Input() outstandingPoints;
  @Input() totalPoints;
  @Input() addViolationTag;
  violationTypes: FirebaseListObservable<any[]>;
  selectedType: string;
  equivalentPoints: number;

  constructor(private violationTypeService: ViolationTypeServiceService) { 
    this.violationTypeService.getAll().subscribe(violationTypes => {
      this.violationTypes = violationTypes;
    });
  }

  ngOnInit() {
  }

  violationTypeChanged(type) {
    this.violationTypes.forEach(violationType => {
      if (violationType.name == type) {
        this.selectedViolation.equivalentPoints = violationType.value;
        this.totalPoints = this.totalPoints + violationType.value;
      }
    })
  }

  resetFields() {
    this.selectedViolation.violationType = '';
    this.selectedViolation.equivalentPoints = 0;
  }

  startDateChanged() {
    var startDate = this.selectedViolation.startDate;
    var endDate = startDate['year'] + "-" + ((startDate['month'] + 6) < 12 ? '0' + (startDate['month'] + 6) : (startDate['month'] + 6)) + "-" + startDate['day'];
    this.selectedViolation.endDate = endDate;
  }

  saveViolation() {
    
  }
}
