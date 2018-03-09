import { Component, OnInit } from '@angular/core';
import { RoutingServersService } from '../routing-servers.service';

@Component({
  selector: 'app-routing-server',
  templateUrl: './routing-server.component.html',
  styleUrls: ['./routing-server.component.css']
})
export class RoutingServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversService: RoutingServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
