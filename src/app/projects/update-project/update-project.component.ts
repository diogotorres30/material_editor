import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {ProjectFormService} from "../../shared/projectForm.service";
import {
  RemoveRelatorioFromProjectGQL,
} from "../../../generated/graphql";
import {ProjectFormOptionsService} from "../../shared/projectForm-options.service";
import {NewRelatorioComponent} from "../new-relatorio/new-relatorio.component";
import {NewRelatorioFormService} from "../../shared/new-relatorio-form.service";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {
  private auxString: string;

  constructor(
    private newRelatorioFormService: NewRelatorioFormService,
    private projectFormService: ProjectFormService,
    public formOptionsService: ProjectFormOptionsService,
    private removeRelatorioFromProjectGQL: RemoveRelatorioFromProjectGQL,
    private dialog: MatDialog
  ) {
  }

  auditorListData: MatTableDataSource<any>;
  auditorDisplayedColumns: string[] = ['name', 'email', 'actions'];
  reviewerListData: MatTableDataSource<any>;
  reviewerDisplayedColumns: string[] = ['name', 'email', 'actions'];
  pmListData: MatTableDataSource<any>;
  pmDisplayedColumns: string[] = ['name', 'email', 'actions'];
  relListData: MatTableDataSource<any>;
  relDisplayedColumns: string[] = ['name', 'status', 'revDeadline', 'delDeadline', 'actions'];
  selectedAuditor: any;
  selectedReviewer: any;
  selectedPM: any;

  ngOnInit() {
    this.auditorListData = new MatTableDataSource<any>(this.projectFormService.edit_auditors);
    this.reviewerListData = new MatTableDataSource<any>(this.projectFormService.edit_reviewers);
    this.pmListData = new MatTableDataSource<any>(this.projectFormService.edit_pms);
    this.relListData = new MatTableDataSource<any>(this.projectFormService.edit_rels);
  }


  createRelatorio() {
    // this.createRelatorioGQL.mutate({
    //   name: "certo ding dong?",
    //   status: "OPEN",
    //   projId: this.projectFormService.edit_proj
    // }).subscribe((created) => {
    //   // location.reload();
    // });
    this.newRelatorioFormService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(NewRelatorioComponent, dialogConfig);
  }

  removeRelatorio(row) {
    this.removeRelatorioFromProjectGQL.mutate({
      relatorioId: row.id,
      projId: this.projectFormService.edit_proj
    }).subscribe(created => {
    });
    location.reload();
  }
}
