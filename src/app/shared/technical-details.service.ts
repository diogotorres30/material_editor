import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddIssueFigureGQL} from '../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class TechnicalDetailsService {
  relId: string;
  issueId: string;
  form: FormGroup = new FormGroup({
    url: new FormControl('', Validators.required),
    caption: new FormControl('', [Validators.required])
  });

  constructor(
    public addIssueFigureGQL: AddIssueFigureGQL
  ) {
  }

  initializeFormGroup() {
    this.form.setValue({
      url: '',
      caption: ''
    });
  }

  // updateFormGroup(tech){
  //   url: tech.url,
  //     caption: tech.caption
  // }
  updateTechnicalDetails(tech) {
    this.addIssueFigureGQL.mutate({
      relatorioId: this.relId,
      issueId: this.issueId,
      url: tech.url,
      caption: tech.caption
    }).subscribe(() => {
    });
  }
}
