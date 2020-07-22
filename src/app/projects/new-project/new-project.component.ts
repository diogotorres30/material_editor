import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import {ProjectFormService} from '../../shared/projectForm.service';
import {ProjectFormOptionsService} from '../../shared/projectForm-options.service';
// import {NewClientFormService} from "../../shared/new-client-form.service";
// import {NewClientComponent} from "../new-client/new-client.component";
import {NotificationService} from '../../shared/notification.service';

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  statuses: Status[] = [
    {value: 'OPEN', viewValue: 'Open'},
    {value: 'INPROGRESS', viewValue: 'In Progress'},
    {value: 'CLOSED', viewValue: 'Closed'}
  ];

  constructor(
    public projectFormService: ProjectFormService,
    public formOptionsService: ProjectFormOptionsService,
    public dialogRef: MatDialogRef<NewProjectComponent>,
    public notificationService: NotificationService,
    // private newClientFormService: NewClientFormService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.formOptionsService.initFormOptions();
  }


  // createRelatorio() {
  //   // this.createRelatorioGQL.mutate({
  //   //   name: "certo ding dong?",
  //   //   status: "OPEN",
  //   //   projId: this.projectFormService.edit_proj
  //   // }).subscribe((created) => {
  //   //   // location.reload();
  //   // });
  //   this.relatorioFormService.initializeFormGroup();
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "80%";
  //   this.dialog.open(NewRelatorioComponent, dialogConfig);
  // }
  // createAndAddClient() {
  //   this.newClientFormService.initializeFormGroup();
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "80%";
  //   this.dialog.open(NewClientComponent, dialogConfig);
  // }

  onSubmit() {
    if (this.projectFormService.form.valid) {
      if (this.projectFormService.updating) {
        this.projectFormService.updateProject(this.projectFormService.form.value);
      } else {
        this.projectFormService.newProject(this.projectFormService.form.value);
      }
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
