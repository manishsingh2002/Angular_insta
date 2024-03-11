import { Component, Input } from '@angular/core';
import { instagramResponse } from '../instajason';

@Component({
  selector: 'app-profdetail',
  templateUrl: './profdetail.component.html',
  styleUrl: './profdetail.component.css',
})
export class ProfdetailComponent {
  @Input() abc: any;
  profdetail = [...instagramResponse.data];
}
