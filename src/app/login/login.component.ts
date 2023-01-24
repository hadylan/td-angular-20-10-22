import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../../../shared';
import { FormBuilder } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  selectedUser: IUser | undefined

  UserForm = this.fb.group({ 
    username: [''],
    password: [''] 
  }, {updateOn: 'submit'});
  submitted = false;



  constructor(private fb: FormBuilder, Auth: AuthGuard) { }

  ngOnInit(): void {
    this.submitted = false;


  }
  

  onSubmit() {
    this.submitted = true;
    if (this.UserForm.valid) {
      this.selectedUser = {...this.selectedUser!, ...this.UserForm.value!};
    }
  }
  resetForm() {
    if (this.selectedUser !== null) {
      this.UserForm.patchValue(this.selectedUser!);
    }
  }


}
