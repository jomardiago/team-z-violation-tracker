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
    this.violationTypes.forEach(vTypes => {
      vTypes.forEach(data => {
        if (data.name == type) {
          console.log(data);
          this.violationType = data.name;
          console.log(this.violationType);
        }
      });
    });
  }
}
