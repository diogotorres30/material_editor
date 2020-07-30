import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../shared/notification.service';
import {MatDialogRef} from '@angular/material/dialog';
import {DocManagementService} from '../../shared/doc-management.service';
import {CoverService} from '../../shared/cover.service';
import {Auditor, Maybe} from '../../../generated/graphql';


interface Remarks {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
  relId: string;

  remarks: Remarks[] = [
    {value: 'DRAFT', viewValue: 'Draft'},
    {value: 'RELEASED', viewValue: 'Released'},
    {value: 'REVIEW', viewValue: 'Review'}
  ];

  constructor(
    public docManagementService: DocManagementService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<VersionComponent>,
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.docManagementService.newVersion(this.docManagementService.form.value);
    this.docManagementService.form.reset();
    this.docManagementService.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onClose() {
    this.docManagementService.form.reset();
    this.docManagementService.initializeFormGroup();
    this.dialogRef.close();
  }


  onClear() {
    this.docManagementService.form.reset();
    this.docManagementService.initializeFormGroup();
  }

}
