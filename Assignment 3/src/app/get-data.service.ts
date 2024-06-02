import { Injectable } from '@angular/core';
import planetsData from '../assets/data/planets.json';
import { Khanmoamplanet } from './myplanets';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  getPlanets(): Khanmoamplanet[] {
    return planetsData.planets;
  }
}
