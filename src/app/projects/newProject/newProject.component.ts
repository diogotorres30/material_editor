import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

import {ProjectFormService} from '../../shared/projectForm.service';
import {ProjectFormOptionsService} from '../../shared/projectForm-options.service'
import {NotificationService} from "../../shared/notification.service";

@Component({
  selector: 'app-project',
  templateUrl: './newProject.component.html',
  styleUrls: ['./newProject.component.scss']
})
export class NewProjectComponent implements OnInit {


  constructor(
    public projectFormService: ProjectFormService,
    public formOptionsService: ProjectFormOptionsService,
    public dialogRef: MatDialogRef<NewProjectComponent>,
    public notificationService: NotificationService,
  ) {
  }

  ngOnInit() {
    this.formOptionsService.initFormOptions();
  }

  onSubmit() {
    if (this.projectFormService.form.valid) {
      this.projectFormService.newProject(this.projectFormService.form.value);
      this.projectFormService.form.reset();
      this.projectFormService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }

  onClose() {
    this.projectFormService.form.reset();
    this.projectFormService.initializeFormGroup();
    this.dialogRef.close();
  }


  onClear() {
    this.projectFormService.form.reset();
    this.projectFormService.initializeFormGroup();
  }
}
