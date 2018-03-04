import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5];
  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4];
  onlyOdd = false;
  value = 6;

  constructor() { }

  ngOnInit() {
  }

}
