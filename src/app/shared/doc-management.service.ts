import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';

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
  ) {

  }

  initializeFormGroup(rel: any) {

  }
}
