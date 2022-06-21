import { loginSuccess, loginRequest } from './../../state/auth.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.loading = false;
    this.initForm();
    this.store.dispatch(loginRequest());
  }

  initForm(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  login(): any {
    this.loading = true;
    setTimeout(() => {
      if(
        this.userForm.get('username')!.value === 'test01' &&
        this.userForm.get('password')!.value === 'test01'
      ) {
        this.store.dispatch(loginSuccess({credentials: this.userForm.value}))
        this.router.navigate(['/tareas']);
      } else {
        this.loading = false;
      }
    }, 2000);
  }

}
