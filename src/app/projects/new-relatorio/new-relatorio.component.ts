import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {NewRelatorioFormService} from '../../shared/new-relatorio-form.service';

@Component({
  selector: 'app-new-relatorio',
  templateUrl: './new-relatorio.component.html',
  styleUrls: ['./new-relatorio.component.scss']
})
export class NewRelatorioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewRelatorioComponent>,
              public newRelatorioFormService: NewRelatorioFormService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.newRelatorioFormService.form.valid) {
      this.newRelatorioFormService.newRelatorio(this.newRelatorioFormService.form.value);
      this.newRelatorioFormService.form.reset();
      this.newRelatorioFormService.initializeFormGroup();
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
