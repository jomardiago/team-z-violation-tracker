import { Component, OnInit } from '@angular/core';
import { ViolationType } from '../models/violation-type';
import { ViolationTypeServiceService } from '../services/violation-type-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  selectedType = {};
  violationTypes: Observable<any[]>;
  violation = {
    violationType: '',
    equivalentPoints: 0
  };

  constructor(private violationTypeService: ViolationTypeServiceService) { 
    this.violationTypes = violationTypeService.getAll();
  }

  ngOnInit() {
  }

  violationTypeChanged(type) {
    this.violationTypes.forEach(function(vTypes) {
      for (var key in vTypes) {
        if (vTypes[key].name == type) {
          this.violation.violationType = type;
          this.violation.equivalentPoints = vTypes[key].value;
        }
      }
    });

    console.log(this.violation);
  }
}
