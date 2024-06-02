import { Component } from '@angular/core';
import { studentData } from '../../assets/data/studentData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  studentInfo = studentData;

}
