import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.loginForm.value);
  }
}
