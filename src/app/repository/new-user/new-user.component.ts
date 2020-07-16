import { Component, OnInit } from '@angular/core';
import {NewUserFormService} from "../../shared/new-user-form.service";
import {NotificationService} from "../../shared/notification.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(
    public newUserFormService: NewUserFormService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<NewUserComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.newUserFormService.form.valid) {
      if (this.newUserFormService.updating) {
        this.newUserFormService.updateUser(this.newUserFormService.form.value)
      } else {
        this.newUserFormService.newUser(this.newUserFormService.form.value)
      }

      this.newUserFormService.form.reset();
      this.newUserFormService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }

  onClose() {
    this.newUserFormService.form.reset();
    this.newUserFormService.initializeFormGroup();
    this.dialogRef.close();
  }


  onClear() {
    this.newUserFormService.form.reset();
    this.newUserFormService.initializeFormGroup();
  }

}
