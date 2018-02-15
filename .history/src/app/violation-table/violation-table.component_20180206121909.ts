import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-violation-table',
  templateUrl: './violation-table.component.html',
  styleUrls: ['./violation-table.component.css']
})
export class ViolationTableComponent implements OnInit {
  violationType: string = "";

  constructor() { }

  ngOnInit() {
  }

  handleViolationTypeClicked(violationType) {
    console.log(violationType);
  }
}
