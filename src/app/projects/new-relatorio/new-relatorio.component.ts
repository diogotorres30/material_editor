import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {RelatorioFormService} from '../../shared/relatorio-form.service';

@Component({
  selector: 'app-new-relatorio',
  templateUrl: './new-relatorio.component.html',
  styleUrls: ['./new-relatorio.component.scss']
})
export class NewRelatorioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewRelatorioComponent>,
              public relatorioFormService: RelatorioFormService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.relatorioFormService.form.valid) {
      this.relatorioFormService.newRelatorio(this.relatorioFormService.form.value);
      this.relatorioFormService.form.reset();
      this.relatorioFormService.initializeFormGroup();
    }
  }

  onClose() {
    this.relatorioFormService.form.reset();
    this.relatorioFormService.initializeFormGroup();
    this.dialogRef.close();
  }


  onClear() {
    this.relatorioFormService.form.reset();
    this.relatorioFormService.initializeFormGroup();
  }

}
