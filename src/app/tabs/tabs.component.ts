import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  selectedIndex = 0;
  tabs: string[] = [
    'Main Lecture',
    'Exercise 1',
    'Exercise 2'
  ];

  constructor() { }

  ngOnInit() {
  }

  changeSelectedTab(index: number): void {
    this.selectedIndex = index;
  }

  isTabSelected(index: number): boolean {
    return this.selectedIndex === index;
  }

}
