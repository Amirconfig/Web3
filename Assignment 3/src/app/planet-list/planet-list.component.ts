import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Khanmoamplanet } from '../myplanets';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css'
})
export class PlanetListComponent implements OnInit {
  planets: Khanmoamplanet[] = [];

  constructor(private getDataService: GetDataService, private router: Router) {}

  ngOnInit() {
    this.planets = this.getDataService.getPlanets();
  }

  onSelect(planet: Khanmoamplanet): void {
    // Here we're using the Angular router to navigate to the details view.
    // We pass along the selected planet's data using the state object.
    this.router.navigate(['/planet-details'], { state: { data: planet } });
  }
}
