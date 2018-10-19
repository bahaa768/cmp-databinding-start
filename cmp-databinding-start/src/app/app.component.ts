import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  constructor() {
    console.log('app constructor called!');

  }
  serverElements: object[] = [
    {type: 'server', name: 'server', content: 'server'},
    {type: 'bluePrint', name: 'bluePrint', content: 'bluePrint'}
  ];

  onCreateServer(data: Event) {
    console.log('event emitted');
    this.serverElements.push(data);

  }
  ngOnInit() {

    console.log('app ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('app ngOnChanges called!');
    console.log(changes);

  }
  ngDoCheck() {
    console.log('app docheck called!');

  }



}
