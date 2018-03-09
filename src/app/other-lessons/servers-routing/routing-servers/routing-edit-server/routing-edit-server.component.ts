import { Component, OnInit } from '@angular/core';
import { RoutingServersService } from '../routing-servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-routing-edit-server',
  templateUrl: './routing-edit-server.component.html',
  styleUrls: ['./routing-edit-server.component.css']
})
export class RoutingEditServerComponent implements OnInit {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: RoutingServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(1);
    // this.serverName = this.server.name;
    // this.serverStatus = this.server.status;
    this.getValuesFromParams(this.route.snapshot.params);
    this.getValueFromQueryParams(this.route.snapshot.queryParams);
    this.route.params.subscribe(this.getValuesFromParams.bind(this));
    this.route.queryParams.subscribe(this.getValueFromQueryParams.bind(this));
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  private getValueFromQueryParams(params: Params): void {
    this.allowEdit = params.allowEdit === '1';
  }

  private getValuesFromParams(params: Params): void {
    this.server = this.serversService.getServer(Number(params.id));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

}
