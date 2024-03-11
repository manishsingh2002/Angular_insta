import { Component } from '@angular/core';
import { instagramResponse } from '../instajason';
@Component({
  selector: 'app-profilepicture',
  templateUrl: './profilepicture.component.html',
  styleUrl: './profilepicture.component.css',
})
export class ProfilepictureComponent {
  public appDetailShow = false;

  onClick = () => {
    this.appDetailShow = !this.appDetailShow;
  };
  profile = [...instagramResponse.data];
}
