import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monitor-stats',
  templateUrl: './monitor-stats.component.html',
  styleUrl: './monitor-stats.component.css'
})
export class MonitorStatsComponent {
  @Input() monitorData!: any[];
  displayedColumns: string[] = ['model', 'brand', 'manufacturer', 'unitsSold', 'inventory'];

  tableColumns = [
    { id: 'model', label: 'Model', property: 'model' },
    { id: 'brand', label: 'Brand', property: 'brand' },
    { id: 'manufacturer', label: 'Manufacturer', property: 'manufacturer' },
    { id: 'unitsSold', label: 'Units Sold', property: 'unitsSold' },
    { id: 'inventory', label: 'Inventory', property: 'inventory' }
  ];
}
