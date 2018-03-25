import { Component, OnInit } from '@angular/core';
import { HttpServerService } from './http-server.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-deprecated-http',
  templateUrl: './deprecated-http.component.html',
  styleUrls: ['./deprecated-http.component.css']
})
export class DeprecatedHttpComponent implements OnInit {

  servers: {name: string, capacity: number, id: number}[] = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
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

}
