import { Component, OnInit, Input } from '@angular/core';
import { ViolationTypeServiceService } from '../services/violation-type-service.service';
import { ViolationService } from '../services/violation.service';

const now = new Date();

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  @Input() selectedViolation;
  @Input() outstandingPoints;
  @Input() addViolationTag;
  @Input() violationsObservable;
  @Input() violationKey;
  violationTypes: any[];
  selectedType: string;
  equivalentPoints: number;

  constructor(private violationTypeService: ViolationTypeServiceService, private violationService: ViolationService) { 
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
      }
    })
  }

  resetFields() {
    this.selectedViolation.violationType = '';
    this.selectedViolation.equivalentPoints = 0;
  }

  startDateChanged() {
    var startDate = this.selectedViolation.startDate;
    var endDate = startDate['year'] + "-" + ((startDate['month'] + 6) < 12 ? '0' + (startDate['month'] + 6) : (startDate['month'] + 6)) + "-" + (startDate['day'] < 10 ? '0' + startDate['day'] : startDate['day']);
    this.selectedViolation.endDate = endDate;
  }

  saveViolation() {
    if (this.addViolationTag) {
      console.log('adding new validation...');
      var startDate = this.selectedViolation.startDate
      var startDateString = startDate['year'] + "-" + (startDate['month'] < 12 ? '0' + startDate['month'] : startDate['month']) + "-" + (startDate['day'] < 10 ? '0' + startDate['day'] : startDate['day']);
      var newObject = {
        violationType: this.selectedViolation.violationType,
        equivalentPoints: this.selectedViolation.equivalentPoints,
        startDate: startDateString,
        endDate: this.selectedViolation.endDate
      }
    
      // this.violationService.save(newObject);
    } else {
      this.violationKey
    }
    this.resetFields();
  }
}
