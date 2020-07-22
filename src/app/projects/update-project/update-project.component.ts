import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {ProjectFormService} from '../../shared/projectForm.service';
import {RemoveRelatorioFromProjectGQL} from '../../../generated/graphql';
import {ProjectFormOptionsService} from '../../shared/projectForm-options.service';
import {NewRelatorioFormService} from '../../shared/new-relatorio-form.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

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
    this.auditorListData = new MatTableDataSource<any>(this.projectFormService.editAuditors);
    this.reviewerListData = new MatTableDataSource<any>(this.projectFormService.editReviewers);
    this.pmListData = new MatTableDataSource<any>(this.projectFormService.editPms);
    this.relListData = new MatTableDataSource<any>(this.projectFormService.editRels);
  }

  removeRelatorio(row) {
    this.removeRelatorioFromProjectGQL.mutate({
      relatorioId: row.id,
      projId: this.projectFormService.editProj
    }).subscribe(() => {
    });
    location.reload();
  }
}
