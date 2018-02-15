import { Component, OnInit, Input } from '@angular/core';
import { ViolationTypeServiceService } from '../services/violation-type-service.service';

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  @Input() selectedViolation: object;
  violationTypes: any[];
  selectedType: string;
  violationType: string;
  equivalentPoints: number;

  constructor(private violationTypeService: ViolationTypeServiceService) { 
    this.violationTypeService.getAll().subscribe(violationTypes => {
      this.violationTypes = violationTypes;
    });
  }

  ngOnInit() {
  }

  violationTypeChanged(type) {
    
  }
}
