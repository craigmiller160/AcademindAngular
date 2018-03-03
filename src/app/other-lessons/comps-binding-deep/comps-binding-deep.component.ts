import { Component, OnInit } from '@angular/core';
import { BindingServer, BindingServerType } from './binding-server.model';

@Component({
  selector: 'app-comps-binding-deep',
  templateUrl: './comps-binding-deep.component.html',
  styleUrls: ['./comps-binding-deep.component.css']
})
export class CompsBindingDeepComponent implements OnInit {
  serverElements: BindingServer[] = [
    new BindingServer(BindingServerType.SERVER,'Testserver', 'Just a test!')
  ];

  constructor() { }

  ngOnInit() {
  }

  // TODO make this a more explicit type
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push(new BindingServer(BindingServerType.SERVER, serverData.serverName, serverData.serverContent));
  }

  // TODO make this a more explicit type
  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push(new BindingServer(BindingServerType.BLUEPRINT, blueprintData.blueprintName, blueprintData.blueprintContent));
  }

}
