import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges, DoCheck {
  newServerName = '';
  newServerContent = '';

  @Output() createdServer = new EventEmitter<{type: string, name: string, content: string}>();

  constructor() {
    console.log('cockpit constructor called!');

  }

  ngOnInit() {
    console.log('cockpit oninit called!');
  }
  onAddServer() {
    this.createdServer.emit({type: 'server', name: this.newServerName, content: this.newServerContent});
    console.log('onAddServer Clicked');
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    this.createdServer.emit({type: 'server', name: this.newServerName, content: this.newServerContent});
    console.log('onAddBluePrint Clicked');
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(' cockpit ngOnChanges called!');
    console.log(changes);

  }
  ngDoCheck() {
    console.log('cockpit docheck called!');

  }
}
