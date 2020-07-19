import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateClientGQL, DeleteClientGQL, UpdateClientGQL} from '../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class NewClientFormService {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  updating = false;
  cliId: string;
  constructor(
    private createClientGQL: CreateClientGQL,
    private updateClientGQL: UpdateClientGQL,
    private deleteClientGQL: DeleteClientGQL
  ) {
  }
  initializeFormGroup() {
    this.form.setValue({
      name: '',
      email: ''
    });
  }

  updateClientFormGroup(cli) {
    this.form.setValue({
      name: cli.name,
      email: cli.email
    });
  }

  newClient(cli) {
    this.createClientGQL.mutate({
      name: cli.name,
      email: cli.email
    }).subscribe(result => {
    });
    location.reload();
  }

  updateClient(cli) {
    this.updateClientGQL.mutate({
      id: this.cliId,
      name: cli.name,
      email: cli.email
    }).subscribe(result => {});
    location.reload();
  }

  deleteClient(id) {
    this.deleteClientGQL.mutate({
      id
    }).subscribe(result => {});
    location.reload();
  }


}
