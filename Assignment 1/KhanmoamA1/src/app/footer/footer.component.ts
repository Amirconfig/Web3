import { Component } from '@angular/core';
import { Login } from '../myclasses';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  loginInfo: Login = new Login(
    'Amir Hosein Khanmohammadi',
    '991646689',
    'Khanmoam',
    'khanmoam@sheridancollege.ca',
    'Trafalgar',
    'Assignment#1'
  );
}
