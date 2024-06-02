import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monitor-details',
  templateUrl: './monitor-details.component.html',
  styleUrl: './monitor-details.component.css'
})
export class MonitorDetailsComponent {
  @Input() monitorData!: any[];
  displayedColumns: string[] = ['model', 'brand', 'resolution', 'size', 'year'];

  tableColumns = [
    { id: 'model', label: 'Model', property: 'model' },
    { id: 'brand', label: 'Brand', property: 'brand' },
    { id: 'resolution', label: 'Resolution', property: 'resolution' },
    { id: 'size', label: 'Size', property: 'size' },
    { id: 'year', label: 'Year', property: 'year' }
  ];
}
