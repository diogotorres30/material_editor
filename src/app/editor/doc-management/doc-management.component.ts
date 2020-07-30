import {Component, OnInit, ViewChild} from '@angular/core';
import {DocManagementService} from '../../shared/doc-management.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {CoverService} from '../../shared/cover.service';
import {VersionComponent} from '../version/version.component';

@Component({
  selector: 'app-doc-management',
  templateUrl: './doc-management.component.html',
  styleUrls: ['./doc-management.component.scss']
})
export class DocManagementComponent implements OnInit {
  public listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'version',
    'date',
    'editor',
    'remarks',
    'actions'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private docManagementService: DocManagementService,
    private dialog: MatDialog,
    private coverService: CoverService
  ) {
  }

  ngOnInit(): void {
    this.listData = new MatTableDataSource(this.coverService.complexrelatorio2.introduction.documentManagement);
    this.listData.paginator = this.paginator;
  }


  deleteVersion(version) {
    this.docManagementService.deleteVersion(version);
  }

  createVersion() {
    this.docManagementService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(VersionComponent, dialogConfig);
  }
}
