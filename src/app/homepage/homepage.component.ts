import { Component } from '@angular/core';
import { instagramResponse } from '../instajason';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  homedata = [...instagramResponse.data];
}
