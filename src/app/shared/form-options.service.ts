import {Injectable} from '@angular/core';
import {FetchClientsGQL, FetchProjectsGQL, FetchUsersGQL,} from "../../generated/graphql";

@Injectable({
  providedIn: 'root'
})
export class FormOptionsService {
  public usersArray: any;
  public clientsArray: any;
  public projectsArray: any;

  constructor(
    private fetchUsersGQL: FetchUsersGQL,
    private fetchClientsGQL: FetchClientsGQL,
    private fetchProjectsGQL: FetchProjectsGQL
  ) {
    this.fetchUsersGQL.watch().valueChanges.subscribe((result) => {
      this.usersArray = result.data.fetchUsers
    });
    this.fetchClientsGQL.watch().valueChanges.subscribe((result) => {
      this.clientsArray = result.data.fetchClients
    });
    this.fetchProjectsGQL.watch().valueChanges.subscribe((result) => {
      this.projectsArray = result.data.fetchProjects
    })
  }

  initFormOptions() {
    this.fetchUsersGQL.watch().valueChanges.subscribe((result) => {
      this.usersArray = result.data.fetchUsers
    });
    this.fetchClientsGQL.watch().valueChanges.subscribe((result) => {
      this.clientsArray = result.data.fetchClients
    });
  }
}
