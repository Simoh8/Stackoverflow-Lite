import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor( private formbuilder:FormBuilder){

  }
  
  loginform!:FormGroup
  
  ngOnInit(): void {
    this.loginform= this.formbuilder.group({
      email: new FormControl( null,[ Validators.required ,Validators.email]),
      password:new FormControl(null,[Validators.required])
    })
  }

login(){
console.log(this.loginform);

}


}
