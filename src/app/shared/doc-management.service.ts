import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {DeleteVersionGQL, FillDocumentManagementGQL} from '../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class DocManagementService {
  relId: string;
  form: FormGroup = new FormGroup({
    version: new FormControl(''),
    editor: new FormControl(''),
    remarks: new FormControl(0),
    date: new FormControl('')
  });

  constructor(
    private datePipe: DatePipe,
    private fillDocumentManagementGQL: FillDocumentManagementGQL,
    private deleteVersionGQL: DeleteVersionGQL
  ) {

  }

  initializeFormGroup() {
    this.form.setValue({
      version: '',
      editor: '',
      remarks: 0,
      date: ''
    });

  }

  newVersion(ver) {
    this.fillDocumentManagementGQL.mutate({
      id: this.relId,
      version: ver.version,
      editor: ver.editor,
      date: ver.date === '' ? '' : this.datePipe.transform(ver.date, 'dd-MM-yyyy'),
      remarks: ver.remarks
    }).subscribe(() => {
    });
    // location.reload();
  }

  deleteVersion(version) {
    this.deleteVersionGQL.mutate({
      id: this.relId,
      version
    }).subscribe(result => {
    });
    location.reload();
  }
}
