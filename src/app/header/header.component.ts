import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { OtherLesson } from '../other-lessons/OtherLesson';
import { OtherLessons } from '../other-lessons/OtherLessons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerClick = new EventEmitter<{btnIndex: number}>();
  btnIndex = 0;
  otherLessons: OtherLesson[] = OtherLessons.OTHER_LESSONS;

  constructor() { }

  ngOnInit() {
  }

  onHeaderClick(btnIndex: number): void {
    this.headerClick.emit({btnIndex: btnIndex});
    this.btnIndex = btnIndex;
  }

}
