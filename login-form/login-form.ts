import { Component, signal } from '@angular/core';
import { form, SchemaPathTree, FormField, required, email } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  imports: [FormField],
  templateUrl: './login-form.html',
  styleUrl: './login-form.less',
})
export class LoginForm {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (schemaPath: SchemaPathTree<LoginData>) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Please enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
  });

  onSubmit(event: Event) {
    event.preventDefault();

    console.log('Credentials: ', this.loginModel());
  }
}
