import { Component, signal } from '@angular/core';
import { LoginForm } from "./login-form/login-form";

@Component({
  selector: 'app-root',
  imports: [LoginForm],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('application-exercise-o2');
}
