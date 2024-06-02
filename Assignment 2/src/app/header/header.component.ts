import { Component, Input } from '@angular/core';
import { Khanmoam } from '../khanmoam';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() profile!: Khanmoam;

}
