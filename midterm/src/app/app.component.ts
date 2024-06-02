import { Component } from '@angular/core';
import monitorData from '../assets/data/monitorData.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'khanmoamMidterm';
  monitorDataArray: any[] = monitorData;

}
