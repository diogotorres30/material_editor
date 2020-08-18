import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {FillTechnicalDetailsGQL} from '../../../generated/graphql';
import {TechnicalDetailsService} from '../../shared/technical-details.service';
import {CoverService} from '../../shared/cover.service';

@Component({
  selector: 'app-technical-details',
  templateUrl: './technical-details.component.html',
  styleUrls: ['./technical-details.component.scss']
})
export class TechnicalDetailsComponent implements OnInit {
  editorStyle = {
    height: '800px'
  };
  technicalDetailsQuill: false;
  technicalDetailsForm: FormGroup;
  technicalDetails: any;

  constructor(
    public dialogRef: MatDialogRef<TechnicalDetailsComponent>,
    public fillTechnicalDetailsGQL: FillTechnicalDetailsGQL,
    public technicalDetailsService: TechnicalDetailsService,
    public coverService: CoverService
  ) {
  }

  ngOnInit(): void {
    this.technicalDetailsForm = new FormGroup({
      technicalDetailsFormControl: new FormControl(null)
    });
    // tslint:disable-next-line:max-line-length
    this.technicalDetails = this.coverService.complexrelatorio2.complexIssues.filter(
      el => el.id === this.technicalDetailsService.issueId)[0].technicalDetails;
  }

  technicalDetailsSubmit() {
    // this.appendixContent = this.executiveSummaryForm.get('executiveSummaryFormControl').value;
    this.fillTechnicalDetailsGQL.mutate({
      relatorioId: this.technicalDetailsService.relId,
      issueId: this.technicalDetailsService.issueId,
      technicalDetails: this.technicalDetailsForm.get('technicalDetailsFormControl').value
    }).subscribe(() => {
    });
  }

  onSubmit() {
    if (this.technicalDetailsService.form.valid) {
      this.technicalDetailsService.updateTechnicalDetails(this.technicalDetailsService.form.value);

      this.technicalDetailsService.form.reset();
      this.technicalDetailsService.initializeFormGroup();
    }
  }

  onClose() {
    this.technicalDetailsService.form.reset();
    this.technicalDetailsService.initializeFormGroup();
    this.dialogRef.close();
  }


  onClear() {
    this.technicalDetailsService.form.reset();
    this.technicalDetailsService.initializeFormGroup();
  }
}
