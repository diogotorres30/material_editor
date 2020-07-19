import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateComplexRelatorioGQL, AddRelatorioToProjectGQL} from '../../generated/graphql';
import {ProjectFormService} from './projectForm.service';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NewRelatorioFormService {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    revDeadline: new FormControl(''/*, Validators.email*/),
    delDeadline: new FormControl(''/*, [ Validators.required, Validators.minLength(8) ]*/),
  });
  public showRelatorioId = '5ef3643109a109d98241ee4f';

  constructor(
    private createComplexRelatorioGQL: CreateComplexRelatorioGQL,
    private addRelatorioToProjectGQL: AddRelatorioToProjectGQL,
    private projectFormService: ProjectFormService,
    private datePipe: DatePipe
  ) {
  }

  initializeFormGroup() {
    this.form.setValue({
      name: '',
      status: 'OPEN',
      revDeadline: '',
      delDeadline: ''
    });
  }

  newRelatorio(rel) {
    this.createComplexRelatorioGQL.mutate({
      classification: '',
      companyLogo: '',
      date: '',
      remarks: '',
      reportTitle: '',
      targetCompany: '',
      version: ''
    }).subscribe(result => {
      this.showRelatorioId = result.data.createComplexRelatorio.id;
      this.addRelatorioToProjectGQL.mutate({
        name: rel.name,
        projId: this.projectFormService.edit_proj,
        status: 'OPEN',
        revDeadline: rel.revDeadline === '' ? '' : this.datePipe.transform(rel.revDeadline, 'dd-MM-yyyy'),
        delDeadline: rel.delDeadline === '' ? '' : this.datePipe.transform(rel.delDeadline, 'dd-MM-yyyy'),
        complexRelatorioId: result.data.createComplexRelatorio.id
      }).subscribe(result => {
      });
    });


    // location.reload();
  }
}
