import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
  AddAuditorToProjectGQL,
  AddClientToProjectGQL,
  AddProjectManagerToProjectGQL,
  AddReviewerToProjectGQL,
  NewProjectGQL
} from "../../generated/graphql";


@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    client: new FormControl(0/*, Validators.email*/),
    projectManager: new FormControl(0/*, [ Validators.required, Validators.minLength(8) ]*/),
    auditor: new FormControl(0),
    reviewer: new FormControl(0),
  });
  edit_auditors = []
  edit_reviewers = []
  edit_pms = []
  edit_rels = []
  edit_proj: string

  constructor(
    private newProjectGQL: NewProjectGQL,
    private addClientToProjectGQL: AddClientToProjectGQL,
    private addAuditorToProjectGQL: AddAuditorToProjectGQL,
    private addReviewerToProjectGQL: AddReviewerToProjectGQL,
    private addProjectManagerToProjectGQL: AddProjectManagerToProjectGQL,
  ) {
  }

  initializeFormGroup() {
    this.form.setValue({
      name: '',
      client: 0,
      projectManager: 0,
      auditor: 0,
      reviewer: 0,
    });
  }

  newProject(project) {
    this.newProjectGQL.mutate({
      name: project.name,
    }).subscribe(result => {
      this.addClientToProjectGQL.mutate({
        clientId: project.client,
        projId: result.data.newProject.id
      }).subscribe(created => {
      });
      this.addAuditorToProjectGQL.mutate({
        userId: project.auditor,
        projId: result.data.newProject.id
      }).subscribe(created => {
      });
      this.addReviewerToProjectGQL.mutate({
        userId: project.reviewer,
        projId: result.data.newProject.id
      }).subscribe(created => {
      });
      this.addProjectManagerToProjectGQL.mutate({
        userId: project.projectManager,
        projId: result.data.newProject.id
      }).subscribe(created => {
      });
    })
    location.reload();
  }

  editProject(project) {
    this.edit_auditors = project.auditor
    this.edit_reviewers = project.reviewer
    this.edit_pms = project.projectManager
    this.edit_rels = project.relatorios
    this.edit_proj = project.id
  }
}
