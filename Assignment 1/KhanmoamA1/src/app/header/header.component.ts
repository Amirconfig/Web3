import { Component } from '@angular/core';
import { Login } from '../myclasses';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loginInfo: Login = new Login(
    'Amir Hosein Khanmohammadi',
    '991646689',
    'Khanmoam',
    'khanmoam@sheridancollege.ca',
    'Trafalgar',
    'Assignment#1'
  );
}
