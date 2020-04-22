import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectFormService} from 'src/app/shared/projectForm.service';
import {Apollo} from 'apollo-angular';
import {CreateRelatorioGQL, DeleteProjectGQL, GetProjectsGQL} from "../../../generated/graphql";

import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProjectComponent} from "../project/project.component";

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {

  constructor(
    private service: ProjectFormService,
    private apollo: Apollo,
    private projectsGQL: GetProjectsGQL,
    private deleteProjectGQL: DeleteProjectGQL,
    private createRelatorioGQL: CreateRelatorioGQL,
    private dialog: MatDialog) {
  }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name','status', 'relatorios', 'auditor', 'reviewer', 'projectManager', 'clients', 'clientEmail', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  auxString: string;


  ngOnInit() {
    // this.newRelatoriosGQL.subscribe().subscribe((result) => {
    //   console.log(result.data.relatorioCreated.relatorio.name + "  " + result.data.relatorioCreated.relatorio.proj)
    // });
    this.projectsGQL.watch().valueChanges.subscribe((result) => {
      this.listData = new MatTableDataSource(result.data.getProjects);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })
  }

  flatten(messy: [],target) {
    this.auxString = ''
    for (let rel of messy) {
      this.auxString += ', ' + rel[target]
    }
    return this.auxString.substring(2)
  }

  deleteProject(id: string) {
    this.deleteProjectGQL.mutate({id}).subscribe((created) => {
      location.reload();
    })
  }

  createRelatorio(id:string) {
    console.log(id)
    this.createRelatorioGQL.mutate({
      name: "certo?",
      projId: id,
      status: "OPEN"
    }).subscribe((created) => {
      location.reload();
    });
  }

  createProject() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(ProjectComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  printThis(message: string){
    console.log(message)
  }

}
