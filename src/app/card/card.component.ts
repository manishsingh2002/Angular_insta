import { Component } from '@angular/core';
import { instagramResponse } from '../instajason';

//
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  carddata = [...instagramResponse.data];
}
