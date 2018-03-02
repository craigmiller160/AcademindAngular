import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-button-clicks',
  templateUrl: './log-button-clicks.component.html',
  styleUrls: ['./log-button-clicks.component.css']
})
export class LogButtonClicksComponent implements OnInit {

  hasBeenClicked = false;
  buttonClicks: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
    this.hasBeenClicked = !this.hasBeenClicked;
    this.buttonClicks.push(String(new Date().toTimeString()));
  }

  getBackgroundColor(index: number): string {
    return index >= 4 ? 'blue' : 'transparent';
  }

  isTextWhite(index: number): boolean {
    return index >= 4;
  }

}
