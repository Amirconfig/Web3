import { Component } from '@angular/core';
import { Khanmoam } from './khanmoam';
import { MuseumData } from './museum.interface';
import { PaintingsData } from './painting.interface';

import museumData from '../assets/data/museum.json';
import paintingsData from '../assets/data/paintings.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KhanmoamA2';
  
  profileData: Khanmoam = {
    name: 'Amir Hosein Khanmhammadi',
    studentNumber: 991646689,
    loginName: 'Khanmoam',
    email: 'Khanmoam@sheridancollege.ca',
    campus: 'Trafalgar',
    assignmentTitle: 'Assignment #2'
  };

  museumData: MuseumData = museumData;
  paintingsData: PaintingsData = paintingsData;
}
