import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {FetchRelatoriosGQL} from '../../../generated/graphql';
import {NewRelatorioFormService} from '../../shared/new-relatorio-form.service';
import {NewRelatorioComponent} from '../new-relatorio/new-relatorio.component';

@Component({
  selector: 'app-relatorios-table',
  templateUrl: './relatorios-table.component.html',
  styleUrls: ['./relatorios-table.component.scss']
})
export class RelatoriosTableComponent implements OnInit {
  searchKey: string;
  public listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'name',
    'status',
    'projName',
    'revDeadline',
    'delDeadline',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private fetchRelatoriosGQL: FetchRelatoriosGQL,
    private newRelatorioFormService: NewRelatorioFormService
  ) {
  }

  ngOnInit() {
    this.fetchRelatoriosGQL.watch().valueChanges.subscribe(result => {
      this.listData = new MatTableDataSource(result.data.fetchRelatorios);
    });
  }

  createRelatorio() {
    this.newRelatorioFormService.updating = false;
    this.newRelatorioFormService.addingToProject = false;
    this.newRelatorioFormService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(NewRelatorioComponent, dialogConfig);
  }

  deleteRelatorio(id) {
    this.newRelatorioFormService.deleteRelatorio(id);
  }

  updateRelatorio(rel) {
    this.newRelatorioFormService.updating = true;
    this.newRelatorioFormService.addingToProject = false;
    this.newRelatorioFormService.updateRelatorioFormGroup(rel);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(NewRelatorioComponent, dialogConfig);
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
}
