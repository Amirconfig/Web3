import { Component } from '@angular/core';
import { Khanmoam } from '../khanmoam';
import { khanmoamInfo } from '../../assets/data/khanmoam-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  userInfo: Khanmoam = khanmoamInfo;

}
