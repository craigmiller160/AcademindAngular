import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-interpolate',
  templateUrl: './username-interpolate.component.html',
  styleUrls: ['./username-interpolate.component.css']
})
export class UsernameInterpolateComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }

  canClearUserName(): boolean {
    return this.userName !== '';
  }

  clearUserName(): void {
    this.userName = '';
  }
}
