import { Component } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginForm : FormGroup = this.fb.group({//formulaire de type FormGroup
    email:['', Validators.required],
    password:['', Validators.minLength(8)],//le password doit faire minimum 8 caractères
    firstName:'Mav', //une valeur de départ
      lastName:'',

      age : '',
  })

  constructor(private fb: FormBuilder) {}//injection de formBuilder

  onSubmit(){
    console.log(this.loginForm.value.lastName);
    if(this.loginForm.valid){
      //je vais passer this.loginForm.value à une méthode de mon service pour créer un objet (IPet);
    }else{
      alert('le formulaire est valide');
    }
  }
}
