import { Component, OnInit } from '@angular/core';
import { RoutingServersService } from './routing-servers.service';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './routing-servers.component.html',
  styleUrls: ['./routing-servers.component.css']
})
export class RoutingServersComponent implements OnInit {

  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: RoutingServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
