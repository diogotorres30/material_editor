import {Component, OnInit} from '@angular/core';
import {NewRelatorioFormService} from '../../shared/new-relatorio-form.service';
import {NotificationService} from '../../shared/notification.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ProjectFormOptionsService} from '../../shared/projectForm-options.service';
interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-relatorio',
  templateUrl: './new-relatorio.component.html',
  styleUrls: ['./new-relatorio.component.scss']
})

export class NewRelatorioComponent implements OnInit {
  statuses: Status[] = [
    {value: 'OPEN', viewValue: 'Open'},
    {value: 'INPROGRESS', viewValue: 'In Progress'},
    {value: 'REVIEW', viewValue: 'Review'},
    {value: 'REVIEWED', viewValue: 'Reviewed'},
    {value: 'CLOSED', viewValue: 'Closed'}
  ];
  constructor(
    public newRelatorioFormService: NewRelatorioFormService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<NewRelatorioComponent>,
    public formOptionsService: ProjectFormOptionsService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.newRelatorioFormService.form.valid) {
      if (this.newRelatorioFormService.updating) {
        this.newRelatorioFormService.updateRelatorio(this.newRelatorioFormService.form.value);
      } else {
        this.newRelatorioFormService.newRelatorio(this.newRelatorioFormService.form.value);
      }

      this.newRelatorioFormService.form.reset();
      this.newRelatorioFormService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }

  onClose() {
    this.newRelatorioFormService.form.reset();
    this.newRelatorioFormService.initializeFormGroup();
    this.dialogRef.close();
  }


  onClear() {
    this.newRelatorioFormService.form.reset();
    this.newRelatorioFormService.initializeFormGroup();
  }
}
