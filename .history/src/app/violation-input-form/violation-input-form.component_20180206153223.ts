import { Component, OnInit, Input } from '@angular/core';
import { ViolationTypeServiceService } from '../services/violation-type-service.service';

const now = new Date();

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  @Input() selectedViolation;
  @Input() outstandingPoints;
  violationTypes: any[];
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
        this.equivalentPoints = violationType.value;
      }
    })
  }
}
