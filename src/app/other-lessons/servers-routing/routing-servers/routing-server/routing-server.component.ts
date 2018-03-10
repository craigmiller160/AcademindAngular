import { Component, OnInit } from '@angular/core';
import { RoutingServersService } from '../routing-servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-routing-server',
  templateUrl: './routing-server.component.html',
  styleUrls: ['./routing-server.component.css']
})
export class RoutingServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversService: RoutingServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.getServerFromParams(this.route.snapshot.params);
    // this.route.params.subscribe(this.getServerFromParams.bind(this));
    this.server = this.route.snapshot.data.server;
    this.route.data.subscribe(data => this.server = data.server);
  }

  // private getServerFromParams(params: Params): void {
  //   this.server = this.serversService.getServer(Number(params.id));
  // }

  onEdit(): void {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
