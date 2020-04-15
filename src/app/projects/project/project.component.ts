import { Component, OnInit } from '@angular/core';

import { Apollo} from 'apollo-angular';

import { ProjectFormService } from '../../shared/projectForm.service';
import { Dog, DogsListGQL, CreateDogGQL } from '../../../generated/graphql';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {
	public dogs: Dog[] = null;

	constructor(
		public service: ProjectFormService,
		private apollo: Apollo,
		private dogsGQL: DogsListGQL,
		private createDogGQL: CreateDogGQL
	) {}

	departments = [ { id: 1, value: 'Dep 1' }, { id: 2, value: 'Dep 2' }, { id: 3, value: 'Dep 3' } ];
	ngOnInit() {
		// this.apollo.query({query:this.dogsList}).subscribe(console.log);
		// this.dogs$ = this.apollo.watchQuery({ query: this.dogsList }).valueChanges.pipe(map(result => result.data.dogs));


		this.dogsGQL.watch().valueChanges.subscribe((result) => {
			this.dogs = result.data.dogs;
      console.log(this.dogs);
		});

	}

	createDog(name: string) {
		this.createDogGQL.mutate({ name }).subscribe((created) => {
			console.log(created.data.createDog.id);
		});
		this.dogsGQL.watch().valueChanges.subscribe((result) => {
			this.dogs = result.data.dogs;
		});
	}

	onClear() {
		this.service.form.reset();
		this.service.initializeFormGroup();
	}
}
