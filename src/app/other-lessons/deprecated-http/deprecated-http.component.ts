import { Component, OnInit } from '@angular/core';
import { HttpServerService } from './http-server.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpServer } from './http-server.model';

@Component({
  selector: 'app-deprecated-http',
  templateUrl: './deprecated-http.component.html',
  styleUrls: ['./deprecated-http.component.css']
})
export class DeprecatedHttpComponent implements OnInit {

  servers: HttpServer[] = [
    new HttpServer('Testserver', 10, this.generateId()),
    new HttpServer('Liveserver', 100, this.generateId())
  ];

  constructor(private serverService: HttpServerService) { }

  onAddServer(name: string): void {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave(): void {
    // No un-subscription is necessary, the HTTP service handles this for us
    this.serverService.storeServers(this.servers).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  private generateId(): number {
    return Math.round(Math.random() * 10000);
  }

  ngOnInit() {

  }

  onLoad(): void {
    this.serverService.getServers().subscribe(
      servers => this.servers = servers,
      error => console.log(error)
    );
  }

  onLoadError(): void {
    this.serverService.getServersError().subscribe(
      servers => this.servers = servers,
      error => console.log(error)
    );
  }

}
