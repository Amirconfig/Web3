import { Component, Input } from '@angular/core';
import { Painting } from '../painting.interface';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent {
  @Input() paintingsData!: Painting[];

  displayedColumns: string[] = [
    'title', 'painter', 'year', 'culturalOrigin'
  ];

  tableColumns = [
    { id: 'title', label: 'Title', property: 'title' },
    { id: 'painter', label: 'Painter', property: 'painter' },
    { id: 'year', label: 'Year', property: 'year' },
    { id: 'culturalOrigin', label: 'Cultural Origin', property: 'culturalOrigin' }
  ];
}
