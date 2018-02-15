import { Component, OnInit, Input } from '@angular/core';
import { ViolationTypeServiceService } from '../services/violation-type-service.service';

const now = new Date();

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  @Input() selectedViolation: object = {
    violationType: ""
  };
  @Input() outstandingPoints: number;
  violationTypes: any[];
  selectedType: string;
  violationType: string;
  equivalentPoints: number;
  totalPoints: number;
  

  constructor(private violationTypeService: ViolationTypeServiceService) { 
    this.violationTypeService.getAll().subscribe(violationTypes => {
      this.violationTypes = violationTypes;
      this.totalPoints = this.outstandingPoints;
    });
  }

  ngOnInit() {
  }

  violationTypeChanged(type) {
    
  }
}
