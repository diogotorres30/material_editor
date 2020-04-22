import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Apollo} from 'apollo-angular';

import {ProjectFormService} from '../../shared/projectForm.service';
import {NotificationService} from "../../shared/notification.service";
import {CreateDogGQL, Dog, DogsListGQL} from '../../../generated/graphql';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public dogs: Dog[] = null;

  constructor(
    public projectFormService: ProjectFormService,
    private apollo: Apollo,
    private dogsGQL: DogsListGQL,
    private createDogGQL: CreateDogGQL,
    public dialogRef: MatDialogRef<ProjectComponent>,
    public notificationService: NotificationService,
  ) {
  }

  ngOnInit() {
    // this.apollo.query({query:this.dogsList}).subscribe(console.log);
    // this.dogs$ = this.apollo.watchQuery({ query: this.dogsList }).valueChanges.pipe(map(result => result.data.dogs));

    this.projectFormService.initializeFormGroup();
    this.dogsGQL.watch().valueChanges.subscribe((result) => {
      this.dogs = result.data.dogs;
    });

  }

  onSubmit() {
    if (this.projectFormService.form.valid) {
      this.projectFormService.newProject(this.projectFormService.form.value);
      this.projectFormService.form.reset();
      this.projectFormService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }

  onClose() {
    this.projectFormService.form.reset();
    this.projectFormService.initializeFormGroup();
    this.dialogRef.close();
  }

  createDog(name: string) {
    this.createDogGQL.mutate({name}).subscribe((created) => {
      console.log(created.data.createDog.id);
    });
    this.dogsGQL.watch().valueChanges.subscribe((result) => {
      this.dogs = result.data.dogs;
    });
  }

  onClear() {
    this.projectFormService.form.reset();
    this.projectFormService.initializeFormGroup();
  }
}
