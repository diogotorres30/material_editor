import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {ProjectFormService} from "../../shared/projectForm.service";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {
  private auxString: string;

  constructor(
    public dialogRef: MatDialogRef<UpdateProjectComponent>,
    private projectFormService: ProjectFormService
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

  ngOnInit() {
    this.auditorListData = new MatTableDataSource<any>(this.projectFormService.edit_auditors);
    this.reviewerListData = new MatTableDataSource<any>(this.projectFormService.edit_reviewers);
    this.pmListData = new MatTableDataSource<any>(this.projectFormService.edit_pms);
    this.relListData = new MatTableDataSource<any>(this.projectFormService.edit_rels);
  }

  onEdit(auditor) {
    console.log(auditor)
  }
}
