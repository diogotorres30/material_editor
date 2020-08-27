import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateComplexRelatorioGQL, CreateRelatorioGQL, DeleteRelatorioGQL, SetRelIdGQL, UpdateRelatorioGQL} from '../../generated/graphql';
import {ProjectFormService} from './projectForm.service';
import {DatePipe} from '@angular/common';
import {ProjectFormOptionsService} from './projectForm-options.service';

@Injectable({
  providedIn: 'root'
})
export class NewRelatorioFormService {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl(''),
    revDeadline: new FormControl(''/*, Validators.email*/),
    delDeadline: new FormControl(''/*, [ Validators.required, Validators.minLength(8) ]*/),
    projId: new FormControl('')
  });
  updating = false;
  addingToProject = false;
  addToProject: string;
  relId: string;
  public showRelatorioId = '5ef3643109a109d98241ee4f';

  constructor(
    private createComplexRelatorioGQL: CreateComplexRelatorioGQL,
    private projectFormService: ProjectFormService,
    private datePipe: DatePipe,
    private updateRelatorioGQL: UpdateRelatorioGQL,
    private deleteRelatorioGQL: DeleteRelatorioGQL,
    private createRelatorioGQL: CreateRelatorioGQL,
    private projectFormOptionsService: ProjectFormOptionsService,
    private setRelIdGQL: SetRelIdGQL
  ) {
  }

  initializeFormGroup() {
    this.form.setValue({
      name: '',
      status: 'OPEN',
      revDeadline: '',
      delDeadline: '',
      projId: '0',
    });
  }

  updateRelatorioFormGroup(rel) {
    console.log(rel.delDeadline);
    this.form.setValue({
      name: rel.name,
      status: rel.status,
      revDeadline: '',
      delDeadline: '',
      projId: rel.projId
    });
  }

  updateRelatorio(rel) {
    this.updateRelatorioGQL.mutate({
      id: this.relId,
      name: rel.name,
      status: rel.status,
      revDeadline: rel.revDeadline === '' ? '' : this.datePipe.transform(rel.revDeadline, 'dd-MM-yyyy'),
      delDeadline: rel.delDeadline === '' ? '' : this.datePipe.transform(rel.delDeadline, 'dd-MM-yyyy'),
    }).subscribe(() => {
    });
    // location.reload();
  }

  deleteRelatorio(id) {
    this.deleteRelatorioGQL.mutate({id}).subscribe(() => {
    });
    location.reload();
  }

  newRelatorio(rel) {
    if (!this.addingToProject) {
      this.addToProject = rel.projId;
    }
    const proj = this.projectFormOptionsService.projectsArray.filter(a => a.id === this.addToProject)[0];
    this.createComplexRelatorioGQL.mutate({
      classification: '',
      companyLogo: 'MAINSEC',
      date: '',
      remarks: '',
      reportTitle: '',
      targetCompany: proj.client[0].name,
      version: '0.1',
      projId: this.addToProject
    }).subscribe(complex => {
      // this.showRelatorioId = complex.data.createComplexRelatorio.id;
      this.createRelatorioGQL.mutate({
        name: rel.name,
        projId: this.addToProject,
        status: rel.status,
        revDeadline: rel.revDeadline === '' ? '' : this.datePipe.transform(rel.revDeadline, 'dd-MM-yyyy'),
        delDeadline: rel.delDeadline === '' ? '' : this.datePipe.transform(rel.delDeadline, 'dd-MM-yyyy'),
        complexRelatorioId: complex.data.createComplexRelatorio.id
      }).subscribe(simple => {
        this.setRelIdGQL.mutate({id: complex.data.createComplexRelatorio.id, relId: simple.data.createRelatorio.id}).subscribe(() => {
        });
      });
    });
    this.addingToProject = false;
    // location.reload();
  }
}
