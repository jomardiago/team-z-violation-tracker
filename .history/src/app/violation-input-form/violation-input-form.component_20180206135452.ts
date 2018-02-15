import { Component, OnInit } from '@angular/core';
import { ViolationTypeServiceService } from '../services/violation-type-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  violationTypes: Observable<any[]>;
  selectedType: string;
  violationType: string;
  equivalentPoints: number;

  constructor(private violationTypeService: ViolationTypeServiceService) { 
    this.violationTypes = violationTypeService.getAll();
  }

  ngOnInit() {
  }

  violationTypeChanged(type) {
    this.violationTypes.forEach(function(vTypes) {
      for (var key in vTypes) {
        if (vTypes[key].name == type) {
          this.violationType = vTypes[key].name;
          this.equivalentPoints = vTypes[key].value
        }
      }
    });
  }
}
