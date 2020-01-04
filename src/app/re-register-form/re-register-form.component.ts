import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-re-register-form',
  templateUrl: './re-register-form.component.html',
  styleUrls: ['./re-register-form.component.css']
})
export class ReRegisterFormComponent implements OnInit {

  nameGroup = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl('')
  });

  address = new FormControl('');

  streetLine = new FormControl('');

  city = new FormControl('');

  country = new FormControl('');

  postcode = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  onNameSubmit() {
    console.log(this.nameGroup.value);
  }

}