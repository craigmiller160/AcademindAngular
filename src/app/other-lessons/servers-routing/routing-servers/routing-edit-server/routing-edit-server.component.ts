import { Component, OnInit } from '@angular/core';
import { RoutingServersService } from '../routing-servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-routing-edit-server',
  templateUrl: './routing-edit-server.component.html',
  styleUrls: ['./routing-edit-server.component.css']
})
export class RoutingEditServerComponent implements OnInit, CanComponentDeactivate {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changedSaved = false;

  constructor(private serversService: RoutingServersService, private route: ActivatedRoute, private router: Router) { }

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
    this.changedSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  private getValueFromQueryParams(params: Params): void {
    this.allowEdit = params.allowEdit === '1';
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    } else if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changedSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

  private getValuesFromParams(params: Params): void {
    this.server = this.serversService.getServer(Number(params.id));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

}
