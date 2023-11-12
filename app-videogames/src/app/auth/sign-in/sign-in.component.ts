import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  group!: FormGroup  

  constructor() {
    
  }

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })

  }

  onSignIn() {
    console.log('FormGroup: ', this.group)

    const values = this.group.value
    const formIsValid =  this.group.valid
    const controlName  = this.group.get('name')
    const controlNameIsValid = this.group.get('name')?.valid

    if (values.password === values.confirmPassword) {
      console.log('Formulario valido');
    } else {
      console.error('Las contraseñas no son iguales');
    }

  }

}

