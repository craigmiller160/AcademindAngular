import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { BindingServer, BindingServerType } from '../binding-server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // TODO add better types
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: any): void {
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: any): void {
    this.blueprintCreated.emit({blueprintName: serverNameInput.value, blueprintContent: this.serverContentInput.nativeElement.value});
  }

}
