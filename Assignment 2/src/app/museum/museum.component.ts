import { Component, Input } from '@angular/core';
import { MuseumItem } from '../museum.interface';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrl: './museum.component.css'
})
export class MuseumComponent {
  @Input() museumData!: MuseumItem[];

  displayedColumns: string[] = [
    'category', 'description', 'cultureDesc', 'materialType', 'objectName', 'section'
  ];
}