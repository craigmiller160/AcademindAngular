import { Component, OnInit } from '@angular/core';
import { BindingServer, BindingServerType } from '../binding-server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverElements.push(new BindingServer(BindingServerType.SERVER, this.newServerName, this.newServerContent));
  }

  onAddBlueprint() {
    this.serverElements.push(new BindingServer(BindingServerType.BLUEPRINT, this.newServerName, this.newServerContent));
  }

}
