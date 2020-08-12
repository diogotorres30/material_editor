import {Component, OnInit} from '@angular/core';
import {AssessmentScopeService} from '../../shared/assessment-scope.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-assessment-scope',
  templateUrl: './assessment-scope.component.html',
  styleUrls: ['./assessment-scope.component.scss']
})
export class AssessmentScopeComponent implements OnInit {

  constructor(
    public assessmentScopeService: AssessmentScopeService,
    public dialogRef: MatDialogRef<AssessmentScopeComponent>,
    public notificationService: NotificationService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.assessmentScopeService.form.valid) {
      this.assessmentScopeService.fillAssessmentScope(this.assessmentScopeService.form.value);
      this.assessmentScopeService.form.reset();
      this.assessmentScopeService.emptyFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }

  onClose() {
    this.assessmentScopeService.form.reset();
    this.assessmentScopeService.emptyFormGroup();
    this.dialogRef.close();
  }


  onClear() {
    this.assessmentScopeService.form.reset();
    this.assessmentScopeService.emptyFormGroup();
  }

}
