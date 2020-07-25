import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CoverService} from '../../shared/cover.service';
import {NotificationService} from '../../shared/notification.service';

interface Classification {
  value: string;
  viewValue: string;
}
interface Remarks {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  classifications: Classification[] = [
    {value: 'INTERNALONLY', viewValue: 'Internal Only'},
    {value: 'PRIVATE', viewValue: 'Private'},
    {value: 'CONFIDENTIAL', viewValue: 'Confidential'}
  ];
  remarks: Remarks[] = [
    {value: 'REVIEW', viewValue: 'Review'},
    {value: 'DRAFT', viewValue: 'Draft'},
    {value: 'RELEASED', viewValue: 'Released'}
  ];

  constructor(
    public coverService: CoverService,
    public dialogRef: MatDialogRef<CoverComponent>,
    public notificationService: NotificationService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.coverService.form.valid) {
      this.coverService.fillCover(this.coverService.form.value);
      this.coverService.form.reset();
      this.coverService.emptyFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }

  onClose() {
    this.coverService.form.reset();
    this.coverService.emptyFormGroup();
    this.dialogRef.close();
  }


  onClear() {
    this.coverService.form.reset();
    this.coverService.emptyFormGroup();
  }
}
