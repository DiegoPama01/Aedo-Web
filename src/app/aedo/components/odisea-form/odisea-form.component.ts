import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-odisea-form',
  templateUrl: './odisea-form.component.html',
  styleUrls: ['./odisea-form.component.css']
})
export class OdiseaFormComponent {

  constructor(private formBuilder: FormBuilder){
    this.odiseaForm.disable();
  }

  odiseaForm = this.formBuilder.group({
    name:[""],
    description:[""],
    location:[""],
    tags:[""],
    images:[""],
    price:[""],
    languages:[""]
  }
  )

  submit(){
    console.log(this.odiseaForm.value)
  }
}
