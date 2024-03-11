import { Component } from '@angular/core';
import { instagramResponse } from './instajason';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postData = [...instagramResponse.data]; // Spread the data array
}
