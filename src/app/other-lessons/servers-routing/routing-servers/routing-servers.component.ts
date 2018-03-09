import { Component, OnInit } from '@angular/core';
import { RoutingServersService } from './routing-servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './routing-servers.component.html',
  styleUrls: ['./routing-servers.component.css']
})
export class RoutingServersComponent implements OnInit {

  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: RoutingServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(): void {
    this.router.navigate(['../servers'], {relativeTo: this.route});
  }

}
