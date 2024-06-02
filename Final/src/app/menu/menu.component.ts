import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinalServiceService } from '../final-service.service';
import { Final } from '../khanmoamFinal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  
  loginName = 'khanmoam';
  today: number = Date.now();
  finalData?: Final;

  constructor(private finalService: FinalServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getFinalData();
  }

  getFinalData(): void {
    this.finalService.getFinalData().subscribe(data => {
      this.finalData = data;
    });
  }

  navigateToFormData(): void {
    this.router.navigate(['/formData'], { state: this.finalData });
  }
}