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
  auditorDisplayedColumns: string[] = ['auditor', 'actions'];
  reviewerListData: MatTableDataSource<any>;
  reviewerDisplayedColumns: string[] = ['reviewer', 'actions'];

  ngOnInit() {
    this.auditorListData = new MatTableDataSource<any>(this.projectFormService.edit_auditors);
    this.reviewerListData = new MatTableDataSource<any>(this.projectFormService.edit_reviewers);
  }
  onEdit(auditor){
    console.log(auditor)
  }
}
