import {Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {ProjectFormService} from 'src/app/shared/projectForm.service';
import {Apollo} from 'apollo-angular';
import {
  Client,
  CreateRelatorioGQL,
  DeleteProjectGQL,
  GetProjectsGQL,
  Maybe,
  Project,
  Relatorio, User
} from "../../../generated/graphql";
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
    private dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) {
  }

  listData = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['id', 'name', 'relatorios', 'users', 'clients', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  auxString: string;


  ngOnInit() {
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    this.refresh();
  }

  flatten(messy:[]) {
    this.auxString = ''
    for (let rel of messy) {
      this.auxString += ', ' + rel['name']
    }
    return this.auxString.substring(2)
  }

  deleteProject(id: string) {
    this.deleteProjectGQL.mutate({id}).subscribe((created) => {
      console.log("asdsd");
    })
    this.refresh()
  }

  createRelatorio() {
    this.createRelatorioGQL.mutate({name: "asdasdas", projId: "2", status: "OPEN"}).subscribe((created) => {
      console.log(created.data)
    });
  }

  createProject() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ProjectComponent);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  refresh(){
    this.projectsGQL.watch().valueChanges.subscribe((result) => {
      this.listData.data = result.data.getProjects;
    })
  }

}
