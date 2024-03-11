import { Component } from '@angular/core';
import { instagramResponse } from '../instajason';
@Component({
  selector: 'app-profilepicture',
  templateUrl: './profilepicture.component.html',
  styleUrl: './profilepicture.component.css',
})
export class ProfilepictureComponent {
  profile = [...instagramResponse.data];
}
// export class ParentComponent {
//   showDetail = false;

//   toggleDetail() {
//     this.showDetail = !this.showDetail; // Toggle visibility on button click
//   }
// }
