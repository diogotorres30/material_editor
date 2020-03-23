import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../shared/project.service';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {
	constructor(public service: ProjectService) {}
	departments = [ { id: 1, value: 'Dep 1' }, { id: 2, value: 'Dep 2' }, { id: 3, value: 'Dep 3' } ];
	ngOnInit() {}

	onClear() {
		this.service.form.reset();
		this.service.initializeFormGroup();
	}
}
