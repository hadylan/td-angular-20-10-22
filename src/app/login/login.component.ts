import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../../../shared';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  selectedUser: IUser | undefined

  loginForm = this.fb.group({ 
    username: ['', Validators.required],
    password: ['', Validators.required] 
  }, {updateOn: 'submit'});
  submitted = false;

  constructor(private fb: FormBuilder, private readonly auth: AuthServiceService) { }

  ngOnInit(): void {
    this.submitted = false;

  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.get('username')!.value!, this.loginForm.get('password')!.value!);
    }
  }
  resetForm() {
    if (this.selectedUser !== null) {
      this.loginForm.patchValue(this.selectedUser!);
    }
  }


}
