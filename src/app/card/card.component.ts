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
  // user_profile = [...instagramResponse.data];
  //   img() {
  //     return this.carddata.forEach((data) => {
  //       data.comments.data.forEach((ele) => {
  //         ele.from.profile_picture;
  //       });
  //     });
  //   }
}

// <ul>
//   <li *ngFor="let post of carddata">
//     <h3>{{ post.comments.data[0].created_time }}</h3>
//   </li>
// </ul>
