import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {ProjectFormService} from "../../shared/projectForm.service";
import {
  AddAuditorToProjectGQL, AddProjectManagerToProjectGQL,
  AddReviewerToProjectGQL, CreateRelatorioGQL,
  RemoveAuditorFromProjectGQL,
  RemoveProjectManagerFromProjectGQL, RemoveRelatorioFromProjectGQL,
  RemoveReviewerFromProjectGQL
} from "../../../generated/graphql";
import {ProjectFormOptionsService} from "../../shared/projectForm-options.service";
import {NewRelatorioComponent} from "../new-relatorio/new-relatorio.component";
import {RelatorioFormService} from "../../shared/relatorio-form.service";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {
  private auxString: string;

  constructor(
    public dialogRef: MatDialogRef<UpdateProjectComponent>,
    private relatorioFormService: RelatorioFormService,
    private projectFormService: ProjectFormService,
    public formOptionsService: ProjectFormOptionsService,
    private removeAuditorFromProjectGQL: RemoveAuditorFromProjectGQL,
    private removeReviewerFromProjectGQL: RemoveReviewerFromProjectGQL,
    private removeProjectManagerFromProjectGQL: RemoveProjectManagerFromProjectGQL,
    private addAuditorToProjectGQL: AddAuditorToProjectGQL,
    private addReviewerToProjectGQL: AddReviewerToProjectGQL,
    private addProjectManagerToProjectGQL: AddProjectManagerToProjectGQL,
    private removeRelatorioFromProjectGQL: RemoveRelatorioFromProjectGQL,
    private createRelatorioGQL: CreateRelatorioGQL,
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
  selected: any;

  ngOnInit() {
    this.auditorListData = new MatTableDataSource<any>(this.projectFormService.edit_auditors);
    this.reviewerListData = new MatTableDataSource<any>(this.projectFormService.edit_reviewers);
    this.pmListData = new MatTableDataSource<any>(this.projectFormService.edit_pms);
    this.relListData = new MatTableDataSource<any>(this.projectFormService.edit_rels);
  }

  addAuditorToProject(id) {
    this.addAuditorToProjectGQL.mutate({
      userId: id,
      projId: this.projectFormService.edit_proj
    }).subscribe(created => {
    });
    location.reload();
  }

  addReviewerToProject(id) {
    this.addReviewerToProjectGQL.mutate({
      userId: id,
      projId: this.projectFormService.edit_proj
    }).subscribe(created => {
    });
    location.reload();
  }

  addProjectManagerToProject(id) {
    this.addProjectManagerToProjectGQL.mutate({
      userId: id,
      projId: this.projectFormService.edit_proj
    }).subscribe(created => {
    });
    location.reload();
  }


  removeAuditor(row) {
    this.removeAuditorFromProjectGQL.mutate({
      auditorId: row.id,
      projId: this.projectFormService.edit_proj
    }).subscribe(created => {
    });
    location.reload();
  }

  removeReviewer(row) {
    console.log(row)
    this.removeReviewerFromProjectGQL.mutate({
      reviewerId: row.id,
      projId: this.projectFormService.edit_proj
    }).subscribe(created => {
    });
    location.reload();
  }

  removePM(row) {
    this.removeProjectManagerFromProjectGQL.mutate({
      projectManagerId: row.id,
      projId: this.projectFormService.edit_proj
    }).subscribe(created => {
    });
    location.reload();
  }

  createRelatorio() {
    // this.createRelatorioGQL.mutate({
    //   name: "certo ding dong?",
    //   status: "OPEN",
    //   projId: this.projectFormService.edit_proj
    // }).subscribe((created) => {
    //   // location.reload();
    // });
    this.relatorioFormService.initializeFormGroup();
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
