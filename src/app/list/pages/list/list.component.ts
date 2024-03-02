import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/services/register.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns = [
    'id', 
    'medicineName', 
    'description', 
    'date', 
    'quantity', 
    'price',
    'total'
  ];

  medicines = []

  constructor(public service: RegisterService){}

  ngOnInit(): void {
    this.service.getAllMedicines().subscribe((response:any)=>{
      this.medicines=response
    })
  }

}
