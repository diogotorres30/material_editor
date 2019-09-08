import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { IIssue } from './issue';
import { FormGroup, FormControl } from '@angular/forms';

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
	textFormat = 'Hello Wold!';

	editorForm: FormGroup;

	editorContent: string;

	show: boolean = true;

	editorStyle = {
		height: '300px'
	};

	ngOnInit() {
		this._http.getIssues().subscribe((data) => {
			this.issues = data;
		});
		this.editorForm = new FormGroup({
			editor: new FormControl(null)
		});
	}

	onSubmit() {
		this.editorContent = this.editorForm.get('editor').value;
		console.log(this.editorForm.get('editor').value);
		this.show = false;
	}
	printIssue(i: IIssue) {
		this.print_issue = i;
	}
}
