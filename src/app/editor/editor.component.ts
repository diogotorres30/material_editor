import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { IIssue } from './issue';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: [ './editor.component.scss' ]
})
export class EditorComponent implements OnInit {
	constructor(private _http: HttpService) {}
  public issues = [];
  public clicked_issues = [];
	public print_issue: IIssue;

	ngOnInit() {
		this._http.getIssues().subscribe((data) => {
			this.issues = data;
		});
	}

	printIssue(i: IIssue) {
		this.print_issue = i;
	}
}
