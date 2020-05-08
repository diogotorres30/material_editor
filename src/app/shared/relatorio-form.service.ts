import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateRelatorioGQL} from "../../generated/graphql";
import {ProjectFormService} from "./projectForm.service";
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RelatorioFormService {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    revDeadline: new FormControl(''/*, Validators.email*/),
    delDeadline: new FormControl(''/*, [ Validators.required, Validators.minLength(8) ]*/),
  });

  constructor(
    private createRelatorioGQL: CreateRelatorioGQL,
    private projectFormService: ProjectFormService,
    private datePipe: DatePipe
  ) {
  }

  initializeFormGroup() {
    this.form.setValue({
      name: '',
      revDeadline: '',
      delDeadline: ''
    });
  }

  newRelatorio(rel) {
    this.createRelatorioGQL.mutate({
      name: rel.name,
      projId: this.projectFormService.edit_proj,
      status: 'OPEN',
      revDeadline: rel.revDeadline == "" ? "" : this.datePipe.transform(rel.revDeadline, 'dd-MM-yyyy'),
      delDeadline: rel.delDeadline == "" ? "" : this.datePipe.transform(rel.delDeadline, 'dd-MM-yyyy')
    }).subscribe(result => {
    });
    location.reload();
  }
}
