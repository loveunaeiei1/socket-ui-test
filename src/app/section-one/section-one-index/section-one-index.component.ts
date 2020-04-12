import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-section-one-index',
  templateUrl: './section-one-index.component.html',
  styleUrls: ['./section-one-index.component.scss']
})
export class SectionOneIndexComponent implements OnInit {
  socket: any;
  users: [] = [];
  input : any;
  constructor() {
    this.socket = io.connect('ws://localhost:3250');
  }

  ngOnInit() {
    this.socket.on('some', (data) => {
      console.log('response from server', data);
    });
  }

  onClickInput(){
    this.socket.emit('CREATE', 'create');
  }
}
