import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddClientToProjectGQL, GetClientsGQL, GetUsersGQL, NewProjectGQL} from "../../generated/graphql";

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {
  public usersArray: any;
  public clientsArray: any;

  constructor(
    private getUsersGQL: GetUsersGQL,
    private getClientsGQL: GetClientsGQL,
    private newProjectGQL: NewProjectGQL,
    private addClientToProjectGQL: AddClientToProjectGQL) {
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    client: new FormControl(''/*, Validators.email*/),
    // clientEmail: new FormControl('', Validators.email),
    projectManager: new FormControl(''/*, [ Validators.required, Validators.minLength(8) ]*/),
    auditor: new FormControl(''),
    // reviewer: new FormControl('1'),
    reviewer: new FormControl(0),
    // hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });


  initializeFormGroup() {
    this.getUsersGQL.watch().valueChanges.subscribe((result) => {
      this.usersArray = result.data.getUsers
    });
    this.getClientsGQL.watch().valueChanges.subscribe((result) => {
      this.clientsArray = result.data.getClients
    });
    this.form.setValue({
      $key: null,
      name: '',
      client: 1,
      // clientEmail: '',
      projectManager: '',
      auditor: '',
      reviewer: '',
      // hireDate: '',
      isPermanent: ''
    });
  }


  newProject(project) {
    let client = this.clientsArray.find(element => element['id'] === project.client);
    this.newProjectGQL.mutate({
      name: project.name,
    }).subscribe(result => {
      console.log(result.data.newProject.id);
      console.log(client.id)
      this.addClientToProjectGQL.mutate({clientId: client.id, projId: result.data.newProject.id, name:client.name, email:client.email}).subscribe(created =>{
        console.log(created.data.addClientToProject.name)
        console.log(created.data.addClientToProject.id)
      })
    })
    // location.reload();
    // console.log(project.name);
    // console.log(project.client);
    // console.log(project.auditor);
    // console.log(project.reviewer);
  }
}
