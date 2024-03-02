import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medicine } from '../../models/medicine';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  objectMedicine: Medicine = new Medicine();

  medicine: FormGroup = this.builder.group({
    id: '',
    medicineName: '',
    description: '',
    date: '',
    quantity: '',
    price: '',
  });

  get id(){return this.medicine.controls['id'];}
  get medicineName(){return this.medicine.controls['medicineName'];}
  get description(){return this.medicine.controls['description'];}
  get date(){return this.medicine.controls['date'];}
  get quantity(){return this.medicine.controls['quantity'];}
  get price(){return this.medicine.controls['price'];}

  constructor(public builder: FormBuilder, public service:RegisterService){}

  loadData(){
    this.objectMedicine.id = this.medicine.value.id;
    this.objectMedicine.medicineName = this.medicine.value.medicineName;
    this.objectMedicine.description = this.medicine.value.description;
    this.objectMedicine.date = this.medicine.value.date;
    this.objectMedicine.quantity = this.medicine.value.quantity;
    this.objectMedicine.price = this.medicine.value.price;
    this.service.createMedicine(this.objectMedicine).subscribe(()=>{
        this.medicine.reset();
        alert('se grabo con exito');
      }
    )
  }
}
