import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-violation-input-form',
  templateUrl: './violation-input-form.component.html',
  styleUrls: ['./violation-input-form.component.css']
})
export class ViolationInputFormComponent implements OnInit {
  violationType: string = "";

  constructor() { }

  ngOnInit() {
  }

  handleViolationTypeClicked(violationType) {
    console.log(violationType);
  }
}
