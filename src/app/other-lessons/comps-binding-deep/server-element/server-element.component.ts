import { Component, Input, OnInit } from '@angular/core';
import { BindingServer } from '../binding-server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: BindingServer;

  constructor() { }

  ngOnInit() {
  }

}
