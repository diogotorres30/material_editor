import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';
import { IIssue } from './issue';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: [ './editor.component.scss' ]
})
export class EditorComponent implements OnInit {
	constructor(private _http: HttpService, private renderer: Renderer2) {}
	public issues = [];
	public clicked_issues = [];
	public print_issue: IIssue;
	public subTitles = [
		'Description',
		'Impact',
		'Remediation',
		'CVSS Vector',
		'Other References',
		'Technical Details',
		'Current Status'
	];

	@ViewChild('sRef', { static: false })
	section: ElementRef;

	editorForm: FormGroup;

	editorContent: string;

	show: boolean = true;

	editorStyle = {
		height: '800px'
	};

	ngOnInit() {
		this._http.getIssues().subscribe((data) => {
			this.issues = data;
			data.forEach((element) => {
				// console.log(element);
				for (let leo in element) {
					// console.log(element[leo]);
				}
			});
		});
		this.editorForm = new FormGroup({
			editor: new FormControl(null)
		});
	}

	onSubmit() {
		this.editorContent = this.editorForm.get('editor').value;
		// console.log(this.editorForm.get('editor').value);
		this.show = false;
	}
	printIssue(i: IIssue) {
		this.print_issue = i;
		this.editorForm.get('editor').setValue(this.print_issue.technical_details);
	}

	checkOverflow(element) {
		if (element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth) {
			this.editorContent = this.editorForm.get('editor').value;
			this.show = false;
		} else {
			return false;
		}
	}

	addElement(i: IIssue) {
		var sub_title, paragraph;
		var iter = 0;
		this.print_issue = i;
		this.editorForm.get('editor').setValue(this.print_issue.technical_details);
		console.log(this.print_issue.title);
		var title = this.renderer.createElement('h1');
		title.innerHTML = this.print_issue.title;
		this.renderer.appendChild(this.section.nativeElement, title);
		for (let leo in this.print_issue) {
			if (leo != 'title') {
				sub_title = this.renderer.createElement('h3');
				sub_title.innerHTML = this.subTitles[iter];
				iter++;
				this.renderer.appendChild(this.section.nativeElement, sub_title);
			}

			// console.log(this.print_issue[leo]);
		}
	}
}
