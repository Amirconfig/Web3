import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Khanmoamplanet } from '../myplanets';


@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.css'
})

export class PlanetDetailsComponent implements OnInit {
  planet: Khanmoamplanet | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // const navigation = this.router.getCurrentNavigation();
    // this.planet = navigation?.extras.state?.['data'] as Khanmoamplanet;
    this.planet = history.state.data as Khanmoamplanet;
  }
 
  goBack() {
    this.router.navigate(['/planet-list']);
  }
}