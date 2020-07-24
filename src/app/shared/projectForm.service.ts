import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddClientToProjectGQL, DeleteProjectGQL, NewProjectGQL, UpdateProjectGQL} from '../../generated/graphql';
import {MatTableDataSource} from '@angular/material/table';


@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {
  public relatoriosListData: MatTableDataSource<any>;
  updating = false;
  projId: string;
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    client: new FormControl(0/*, Validators.email*/),
    projectManager: new FormControl(0/*, [ Validators.required, Validators.minLength(8) ]*/),
    auditor: new FormControl(0),
    reviewer: new FormControl(0),
  });
  // editAuditors = [];
  // editReviewers = [];
  // editPms = [];
  // editRels = [];
  // editProj: string;

  constructor(
    private newProjectGQL: NewProjectGQL,
    private addClientToProjectGQL: AddClientToProjectGQL,
    private updateProjectGQL: UpdateProjectGQL,
    private deleteProjectGQL: DeleteProjectGQL
  ) {
  }

  initializeFormGroup() {
    this.form.setValue({
      name: '',
      status: 'OPEN',
      client: 0,
      projectManager: [],
      auditor: [],
      reviewer: [],
    });
  }

  updateProjectFormGroup(proj) {
    // proj.auditor.map(a => a.id);
    this.form.setValue({
      name: proj.name,
      status: proj.status,
      client: proj.client[0].id,
      projectManager: proj.projectManager.map(a => a.id),
      auditor: proj.auditor.map(a => a.id),
      reviewer: proj.reviewer.map(a => a.id)
    });
    location.reload();
  }

  newProject(project) {
    this.newProjectGQL.mutate({
      name: project.name,
      status: project.status,
      clientId: project.client,
      auditorIds: project.auditor,
      revIds: project.reviewer,
      pmIds: project.projectManager
    }).subscribe(result => {
    });
    location.reload();
  }

  updateProject(proj) {
    this.updateProjectGQL.mutate({
      id: this.projId,
      name: proj.name,
      status: proj.status,
      clientId: proj.client[0],
      auditorIds: proj.auditor,
      revIds: proj.reviewer,
      pmIds: proj.projectManager
    }).subscribe(result => {
      }
    );
  }

  deleteProject(id: string) {
    this.deleteProjectGQL.mutate({id}).subscribe(result => {
    });
    location.reload();
  }

  // editProject(project) {
  //   this.editAuditors = project.auditor;
  //   this.editReviewers = project.reviewer;
  //   this.editPms = project.projectManager;
  //   this.editRels = project.relatorios;
  //   this.editProj = project.id;
  // }

}
