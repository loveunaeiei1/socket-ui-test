import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-socket-app';
  inputMessage = ''

  ngOnInit(){
    console.log('message', this.inputMessage);
  }

  onClickInputMessage(event) {
    let val = event.target.value;
    console.log('input message' , val);
  }
}
