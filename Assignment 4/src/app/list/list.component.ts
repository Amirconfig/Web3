import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { FieldData } from '../field-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit {
  fieldData: FieldData[] = [];

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getFieldData().subscribe(
      data => {
        console.log(data);
        this.fieldData = data;
      },
      error => console.error(error)
    );
  }
}