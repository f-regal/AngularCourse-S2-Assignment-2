import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'assignment-2';
  username = '';
  disableReset = true;

  onAllowReset() {
    if(this.username.length > 0) {
      this.disableReset = false;
    }
    return this.disableReset;
  }

  onReset() {
    this.username = '';
    this.disableReset = true;
  }
}
