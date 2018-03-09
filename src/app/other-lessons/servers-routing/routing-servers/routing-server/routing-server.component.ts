import { Component, OnInit } from '@angular/core';
import { RoutingServersService } from '../routing-servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-routing-server',
  templateUrl: './routing-server.component.html',
  styleUrls: ['./routing-server.component.css']
})
export class RoutingServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversService: RoutingServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getServerFromParams(this.route.snapshot.params);
    this.route.params.subscribe(params => this.server = this.serversService.getServer(Number(params.id)));
  }

  private getServerFromParams(params: Params): void {
    this.server = this.serversService.getServer(Number(params.id));
  }

}
