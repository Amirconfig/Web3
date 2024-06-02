import { Component } from '@angular/core';
import { Khanmoam } from '../khanmoam';
import { khanmoamInfo } from '../../assets/data/khanmoam-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userInfo: Khanmoam = khanmoamInfo;

}
