import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  isAliveCheckSamble: boolean = false;

  disposeCheckSample(): void{
    if (this.isAliveCheckSamble === true) {
      this.isAliveCheckSamble = false;
    } else {
      this.isAliveCheckSamble = true;
    }
  }
}
