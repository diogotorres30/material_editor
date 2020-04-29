import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {ProjectFormService} from "../../shared/projectForm.service";
import {
  RemoveAuditorFromProjectGQL,
  RemoveProjectManagerFromProjectGQL,
  RemoveReviewerFromProjectGQL
} from "../../../generated/graphql";
import {FormOptionsService} from "../../shared/form-options.service";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {
  private auxString: string;

  constructor(
    public dialogRef: MatDialogRef<UpdateProjectComponent>,
    private projectFormService: ProjectFormService,
    public formOptionsService: FormOptionsService,
    private removeAuditorFromProjectGQL: RemoveAuditorFromProjectGQL,
    private removeReviewerFromProjectGQL: RemoveReviewerFromProjectGQL,
    private removeProjectManagerFromProjectGQL: RemoveProjectManagerFromProjectGQL
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
    console.log(id)
    console.log(this.projectFormService.edit_proj)
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

  removeRelatorio(row) {

  }
}
