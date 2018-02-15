import { Component, OnInit } from '@angular/core';
import { ViolationType } from '../models/violation-type';
import { ViolationTypeServiceService } from '../services/violation-type-service.service';
import { Observable } from 'rxjs/Observable';
import { Violation } from '../models/violation';

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  violationTypes: Observable<any[]>;
  violation: Violation;

  constructor(private violationTypeService: ViolationTypeServiceService) { 
    this.violationTypes = violationTypeService.getAll();
  }

  ngOnInit() {
  }

  violationTypeChanged(vType) {
    this.violation.violationType = vType.name;
  }
}
