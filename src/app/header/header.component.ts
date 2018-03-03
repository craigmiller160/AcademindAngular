import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerClick = new EventEmitter<{btnIndex: number}>();
  btnIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  onHeaderClick(btnIndex: number): void {
    this.headerClick.emit({btnIndex: btnIndex});
    this.btnIndex = btnIndex;
  }

}
