import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Final } from '../khanmoamFinal';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.css'
})
export class FormDataComponent {
  finalData: Final;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.finalData = navigation?.extras.state as Final;
  }

  onSubmit(form: NgForm): void {
    console.log('Submitted!', form.value);
    this.router.navigate(['/menu']);
  }
}