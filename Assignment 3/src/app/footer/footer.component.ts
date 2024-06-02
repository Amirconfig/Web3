import { Component } from '@angular/core';
import { studentData } from '../../assets/data/studentData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  studentInfo = studentData;
  
}
