import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
  AddAuditorToProjectGQL,
  AddClientToProjectGQL,
  AddProjectManagerToProjectGQL,
  AddReviewerToProjectGQL,
  NewProjectGQL
} from "../../generated/graphql";
import {FormOptionsService} from "./form-options.service";


@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  constructor(
    private newProjectGQL: NewProjectGQL,
    private addClientToProjectGQL: AddClientToProjectGQL,
    private addAuditorToProjectGQL: AddAuditorToProjectGQL,
    private addReviewerToProjectGQL: AddReviewerToProjectGQL,
    private addProjectManagerToProjectGQL: AddProjectManagerToProjectGQL,
    private formOptionsService: FormOptionsService
  ) {
  }


  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    client: new FormControl(0/*, Validators.email*/),
    projectManager: new FormControl(0/*, [ Validators.required, Validators.minLength(8) ]*/),
    auditor: new FormControl(0),
    reviewer: new FormControl(0),
  });
  edit_auditors = []
  edit_reviewers = []


  initializeFormGroup() {
    this.form.setValue({
      // $key: null,
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

  populateProjectForm(project) {
    let client_option
    let reviewer_option
    let auditor_option
    let projectManager_option
    try {
      client_option = (this.formOptionsService.clientsArray.findIndex(el => el.name === project.client[0].name) + 1).toString()
    } catch (e) {
      client_option = ''
    }
    try {
      reviewer_option = (this.formOptionsService.usersArray.findIndex(el => el.name === project.reviewer[0].name) + 1).toString()
    } catch (e) {
      reviewer_option = ''
    }
    try {
      auditor_option = (this.formOptionsService.usersArray.findIndex(el => el.name === project.auditor[0].name) + 1).toString()
    } catch (e) {
      auditor_option = ''
    }
    try {
      projectManager_option = (this.formOptionsService.usersArray.findIndex(el => el.name === project.projectManager[0].name) + 1).toString()
    } catch (e) {
      projectManager_option = ''
    }

    this.form.setValue({
      name: project.name,
      client: client_option,
      projectManager: projectManager_option,
      auditor: auditor_option,
      reviewer: reviewer_option
    })
  }

  editProject(project) {
    this.edit_auditors = project.auditor
    this.edit_reviewers = project.reviewer
  }
}
