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
    this.initUser();
  }

  onChangeInput(){
    this.socket.emit('news', 'hello my news');
    this.socket.on('news', (data) => {
      console.log('my data', data)
    });

    // this.socket.emit('my other event', function (data) {
    //   console.log(data);
    //   this.socket.on('news', { my: 'data' });
    // });

    // console.log('input val : ', this.input);
    // let shareDate = JSON.stringify(this.users);
    // this.socket.emit('news', shareDate);
    // this.socket.on('news', (data) => {
    //   console.log(' ok ' ,data);
    //   this.socket.emit('news' , {my : 'lk'})
    // })
    // let observable = new Observable(observer => {
    //   this.socket.on('news', (data) => {
    //     console.log("Received message from Websocket Server")
    //     this.socket.emit('news', {my : 'data'});
    //     observer.next(data);
    //     })
    //     return () => {
    //       console.log('fail');
    //       this.socket.disconnect();
    //     }
    // });
    // observable.subscribe(res=> {
    //   console.log('result ' , res);
    // })
  }

  initUser(){
    // let userOne = {
    //   username : 'timmy',
    //   userId : 0,
    //   fullname : 'timmy',
    //   displayname : 'timmy'
    // };
    // this.users.push(userOne);

    // let userTwo = {
    //   username : 'timmy2',
    //   userId : 1,
    //   fullname : 'timmy2',
    //   displayname : 'timmy2'
    // };
    // this.users.push(userTwo);
  }
}
