import { Component, OnInit } from '@angular/core';

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
  onAddServer(name: string): void {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId(): number {
    return Math.round(Math.random() * 10000);
  }

  ngOnInit() {
  }

}
