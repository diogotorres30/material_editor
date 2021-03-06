import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectFormService} from 'src/app/shared/projectForm.service';
import {NewRelatorioFormService} from '../../shared/new-relatorio-form.service';
import {Apollo} from 'apollo-angular';
import {DeleteProjectGQL, FetchProjectsGQL} from '../../../generated/graphql';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NewProjectComponent} from '../new-project/new-project.component';
import {NewRelatorioComponent} from '../../repository/new-relatorio/new-relatorio.component';


@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss'],
})
export class ProjectTableComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'name',
    'status',
    'relatorios',
    'auditor',
    'reviewer',
    'projectManager',
    'client',
    'clientEmail',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  auxString: string;
  first: true;
  activeUser = localStorage.getItem('userEmail');

  constructor(
    public projectFormService: ProjectFormService,
    private apollo: Apollo,
    private fetchProjectsGQL: FetchProjectsGQL,
    private deleteProjectGQL: DeleteProjectGQL,
    private dialog: MatDialog,
    private relatorioFormService: NewRelatorioFormService,
    private router: Router,
    private newRelatorioFormService: NewRelatorioFormService
  ) {
  }

  ngOnInit() {
    const altListData = Array<any>();
    this.fetchProjectsGQL.watch().valueChanges.subscribe((result) => {
      if (localStorage.getItem('userEmail') === 'admin@saar2020.com') {
        this.listData = new MatTableDataSource(result.data.fetchProjects);
      } else {
        for (const pr of result.data.fetchProjects) {
          if (
            (pr.projectManager.filter(el => el.email === localStorage.getItem('userEmail')).length +
              pr.reviewer.filter(el => el.email === localStorage.getItem('userEmail')).length +
              pr.auditor.filter(el => el.email === localStorage.getItem('userEmail')).length) > 0) {
            altListData.push(pr);
          }
        }

        this.listData = new MatTableDataSource(altListData);
      }


      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  openInEditor(relId) {
    console.log(relId);
    localStorage.setItem('showRelatorioId', relId);
    // this.relatorioFormService.showRelatorioId = relId;
    this.router.navigate(['/editor']).then(r => {
    });
  }

  flatten(messy: [], target) {
    this.auxString = '';
    for (const rel of messy) {
      this.auxString += ', ' + rel[target];
    }
    return this.auxString.substring(2);
  }

  deleteProject(id: string) {
    this.projectFormService.deleteProject(id);
  }

  createProject() {
    this.projectFormService.updating = false;
    this.projectFormService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(NewProjectComponent, dialogConfig);
  }

  createRelatorio(proj) {
    this.newRelatorioFormService.updating = false;
    this.newRelatorioFormService.addingToProject = true;
    this.newRelatorioFormService.addToProject = proj.id;
    this.newRelatorioFormService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(NewRelatorioComponent, dialogConfig);
  }

  updateProject(project) {
    this.projectFormService.updating = true;
    this.projectFormService.projId = project.id;
    this.projectFormService.updateProjectFormGroup(project);
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(NewProjectComponent, dialogConfig);
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }


}
