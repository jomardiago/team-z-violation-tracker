import { Component, OnInit } from '@angular/core';
import { ViolationType } from '../models/violation-type';

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  violationTypes: ViolationType[] = [];

  constructor() { }

  ngOnInit() {
  }

  violationTypeChanged(violationType) {
    console.log(violationType);
  }
}
