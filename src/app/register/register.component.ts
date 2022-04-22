import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;
  postsList = <any>[];
  searchText = '';
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getPosts().subscribe((result: any) => {
      this.postsList = result;
      console.log(this.postsList);
    });
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
