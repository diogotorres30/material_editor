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
    status: new FormControl('', Validators.required),
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
      status: 'OPEN',
      client: 0,
      projectManager: 0,
      auditor: 0,
      reviewer: 0,
    });
  }

  newProject(project) {
    this.newProjectGQL.mutate({
      name: project.name,
      status: project.status
    }).subscribe(result => {
      this.addClientToProjectGQL.mutate({
        clientId: project.client,
        projId: result.data.newProject.id
      }).subscribe(created => {
      });
      console.log(project.auditor)
      this.addAuditorToProjectGQL.mutate({
        userIds: project.auditor,
        projId: result.data.newProject.id
      }).subscribe(created => {
      });

      for (let revId of project.reviewer) {
        this.addReviewerToProjectGQL.mutate({
          userId: revId,
          projId: result.data.newProject.id
        }).subscribe(created => {
        });
      }


      for (let pmId of project.projectManager) {
        this.addProjectManagerToProjectGQL.mutate({
          userId: pmId,
          projId: result.data.newProject.id
        }).subscribe(created => {
        });
      }

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
