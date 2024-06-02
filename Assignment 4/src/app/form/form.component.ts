import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetDataService } from '../get-data.service';
import { FieldData } from '../field-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit {
  fieldForm!: FormGroup;
  currentDataIndex: number = 0;
  fieldDataList: FieldData[] = [];

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.fieldForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      postalCode: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/)
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.maxLength(15)])
    });

    this.getDataService.getFieldData().subscribe(data => {
      this.fieldDataList = data;
      this.setFormData(this.fieldDataList[this.currentDataIndex]);
    });
  }

  setFormData(data: FieldData): void {
    if (data) {
      this.fieldForm.setValue({
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        postalCode: data.postalCode,
        email: data.email,
        phoneNumber: data.phoneNumber
      });
    }
  }

  onSubmit(): void {
    console.log(this.fieldForm.value);
    this.currentDataIndex++;
    if (this.currentDataIndex < this.fieldDataList.length) {
      this.setFormData(this.fieldDataList[this.currentDataIndex]);
    } else {
      this.fieldForm.disable();
    }
  }
}