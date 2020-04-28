import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectFormService} from 'src/app/shared/projectForm.service';
import {Apollo} from 'apollo-angular';
import {CreateRelatorioGQL, DeleteProjectGQL, FetchProjectsGQL} from "../../../generated/graphql";

import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NewProjectComponent} from "../newProject/newProject.component";
import {UpdateProjectComponent} from "../update-project/update-project.component";

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss'],
})
export class ProjectTableComponent implements OnInit {

  constructor(
    private service: ProjectFormService,
    private apollo: Apollo,
    private fetchProjectsGQL: FetchProjectsGQL,
    private deleteProjectGQL: DeleteProjectGQL,
    private createRelatorioGQL: CreateRelatorioGQL,
    private dialog: MatDialog) {
  }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'status', 'relatorios', 'auditor', 'reviewer', 'projectManager', 'client', 'clientEmail', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  auxString: string;


  ngOnInit() {
    this.fetchProjectsGQL.watch().valueChanges.subscribe((result) => {
      this.listData = new MatTableDataSource(result.data.fetchProjects);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })
  }

  flatten(messy: [], target) {
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

  createRelatorio() {
    this.createRelatorioGQL.mutate({
      name: "certo?",
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
    this.dialog.open(NewProjectComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  onEdit(project) {
    this.service.populateProjectForm(project);
    this.service.editProject(project);
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(UpdateProjectComponent, dialogConfig);
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  printThis(message: string) {
    console.log(message)
  }

}
