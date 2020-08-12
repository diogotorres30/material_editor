import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FillAssessmentScopeGQL} from '../../generated/graphql';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AssessmentScopeService {
  relId: string;
  form: FormGroup = new FormGroup({
    executionPeriodFrom: new FormControl('', Validators.required),
    executionPeriodTo: new FormControl('', Validators.required),
    assetNames: new FormControl(''),
    assetsDescription: new FormControl(''/*, Validators.email*/),
    assetAddresses: new FormControl(''/*, [ Validators.required, Validators.minLength(8) ]*/)
  });

  constructor(
    private datePipe: DatePipe,
    private fillAssessmentScopeGQL: FillAssessmentScopeGQL
  ) {
  }

  emptyFormGroup() {
    this.form.setValue({
      executionPeriodFrom: '',
      executionPeriodTo: '',
      assetNames: '',
      assetsDescription: '',
      assetAddresses: '',
    });
  }

  initializeFormGroup(rel) {
    this.form.setValue({
      executionPeriodFrom: '',
      executionPeriodTo: '',
      assetNames: rel.assessmentInformation.assessmentScope.assetNames,
      assetsDescription: rel.assessmentInformation.assessmentScope.assetsDescription,
      assetAddresses: rel.assessmentInformation.assessmentScope.assetAddresses
    });
  }

  fillAssessmentScope(rel) {
    this.fillAssessmentScopeGQL.mutate({
      id: this.relId,
      // tslint:disable-next-line:max-line-length
      executionPeriod: this.datePipe.transform(rel.executionPeriodFrom, 'yyyy-MM-dd')
        + ' - ' +
        this.datePipe.transform(rel.executionPeriodTo, 'yyyy-MM-dd'),
      assetNames: rel.assetNames,
      assetsDescription: rel.assetsDescription,
      assetAddresses: rel.assetAddresses
    }).subscribe(result => {
      console.log(result.data.fillAssessmentScope.assessmentInformation.assessmentScope.assetAddresses);
    });
  }
}
