import { Component, Input } from '@angular/core';
import { Khanmoam } from '../khanmoam';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() profile!: Khanmoam;

}
