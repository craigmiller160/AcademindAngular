import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { BindingServer, BindingServerType } from '../binding-server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: BindingServer;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('NgOnInit called');
    console.log('TextContent: ' + this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NgOnChanges called');
    console.log(changes);
  }

  isServerType(element: BindingServer): boolean {
    return element.type === BindingServerType.SERVER;
  }

  isBlueprintType(element: BindingServer): boolean {
    return element.type === BindingServerType.BLUEPRINT;
  }


  ngDoCheck(): void {
    console.log('Do Check called');
  }

  ngAfterContentInit(): void {
    console.log('NgAfterContentInit called');
  }


  ngAfterContentChecked(): void {
    console.log('NgAfterContentChecked called');
  }


  ngAfterViewInit(): void {
    console.log('NgAfterViewInit called');
    console.log('TextContent: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('NgAfterViewChecked called');
  }


  ngOnDestroy(): void {
    console.log('NgOnDestroy called');
  }
}
