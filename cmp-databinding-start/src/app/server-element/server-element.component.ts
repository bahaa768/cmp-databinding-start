import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck {
  @Input() element: {type: string, name: string, content: string};

  constructor() {
    console.log('server element constructor called!');

   }

  ngOnInit() {
    console.log('server element oninit called!');

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('server element onchanges called');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('serverelement docheck called!');

  }

}
