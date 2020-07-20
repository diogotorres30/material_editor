import {Component, OnInit} from '@angular/core';
import {NewClientFormService} from '../../shared/new-client-form.service';
import {NotificationService} from '../../shared/notification.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  constructor(
    public newClientFormService: NewClientFormService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<NewClientComponent>
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.newClientFormService.form.valid) {
      if (this.newClientFormService.updating) {
        this.newClientFormService.updateClient(this.newClientFormService.form.value);
      } else {
        this.newClientFormService.newClient(this.newClientFormService.form.value);
      }

      this.newClientFormService.form.reset();
      this.newClientFormService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }

  onClose() {
    this.newClientFormService.form.reset();
    this.newClientFormService.initializeFormGroup();
    this.dialogRef.close();
  }


  onClear() {
    this.newClientFormService.form.reset();
    this.newClientFormService.initializeFormGroup();
  }

}
