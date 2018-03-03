import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { BindingServer, BindingServerType } from '../binding-server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: BindingServer;

  constructor() { }

  ngOnInit() {
  }

  isServerType(element: BindingServer): boolean {
    return element.type === BindingServerType.SERVER;
  }

  isBlueprintType(element: BindingServer): boolean {
    return element.type === BindingServerType.BLUEPRINT;
  }

}
