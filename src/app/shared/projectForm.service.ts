import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddClientToProjectGQL, NewProjectGQL, UpdateProjectGQL} from '../../generated/graphql';
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
  edit_auditors = [];
  edit_reviewers = [];
  edit_pms = [];
  edit_rels = [];
  edit_proj: string;

  constructor(
    private newProjectGQL: NewProjectGQL,
    private addClientToProjectGQL: AddClientToProjectGQL,
    private updateProjectGQL: UpdateProjectGQL,
  ) {
  }

  initializeFormGroup() {
    this.form.setValue({
      name: '',
      status: 'OPEN',
      client: 0,
      projectManager: 0,
      auditor: 0,
      reviewer: 0,
    });
  }

  updateProjectFormGroup(proj) {
    proj.auditor.map(a => a.id);
    this.form.setValue({
      name: proj.name,
      status: proj.status,
      client: proj.client[0].id,
      projectManager: proj.projectManager.map(a => a.id),
      auditor: proj.auditor.map(a => a.id),
      reviewer: proj.reviewer.map(a => a.id)
    });
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
      clientId: proj.client[0]
    }).subscribe(result => {
      }
    );
  }

  editProject(project) {
    this.edit_auditors = project.auditor;
    this.edit_reviewers = project.reviewer;
    this.edit_pms = project.projectManager;
    this.edit_rels = project.relatorios;
    this.edit_proj = project.id;
  }

}
