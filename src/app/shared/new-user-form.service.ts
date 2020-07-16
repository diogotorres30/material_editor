import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateUserGQL, DeleteUserGQL, UpdateUserGQL} from "../../generated/graphql";

@Injectable({
  providedIn: 'root'
})
export class NewUserFormService {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  updating : boolean = false;
  userId : string;
  constructor(
    private createUserGQL : CreateUserGQL,
    private updateUserGQL: UpdateUserGQL,
    private deleteUserGQL: DeleteUserGQL
  ) { }

  initializeFormGroup() {
    this.form.setValue({
      name: '',
      email: ''
    });
  }

  updateUserFormGroup(user){
    this.form.setValue({
      name:user.name,
      email:user.email
    })
  }

  deleteUser(id){
    this.deleteUserGQL.mutate({
      id:id
    }).subscribe(result => {});
    location.reload();
  }

  newUser(user) {
    this.createUserGQL.mutate({
      name: user.name,
      email: user.email
    }).subscribe(result => {
    })
    location.reload();
  }

  updateUser(user) {
    this.updateUserGQL.mutate({
      id: this.userId,
      name: user.name,
      email: user.email
    }).subscribe(result=>{})
    location.reload();
  }
}
