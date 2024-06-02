import { Component } from '@angular/core';
import { Car } from '../myclasses';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  cars: Car[] = [
    new Car('Ferrari', '812 Superfast', 'Coupe', 'Rosso Corsa'),
    new Car('Lamborghini', 'Urus', 'SUV', 'Giallo Auge'),
    new Car('McLaren', '720S Spider', 'Convertible', 'Azure Blue'),
    new Car('Maserati', 'Quattroporte Trofeo', 'Sedan', 'Nero Ribelle'),
    new Car('Aston Martin', 'Vantage', 'Coupe', 'Skyfall Silver'),
    
  ];
  
  selectedCar: Car | null = null;

  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}
