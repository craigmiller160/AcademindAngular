import { Component, OnInit } from '@angular/core';
import { BindingServer } from './binding-server.model';

@Component({
  selector: 'app-comps-binding-deep',
  templateUrl: './comps-binding-deep.component.html',
  styleUrls: ['./comps-binding-deep.component.css']
})
export class CompsBindingDeepComponent implements OnInit {
  serverElements: BindingServer[] = [];

  constructor() { }

  ngOnInit() {
  }



}
