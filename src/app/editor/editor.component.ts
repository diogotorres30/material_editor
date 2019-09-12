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

	@ViewChild('sRef',{static: false}) section: ElementRef;
	
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
				console.log(element);
				for (let leo in element) {
					console.log(element[leo]);
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
	}

	checkOverflow(element) {
		if (element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth) {
			this.editorContent = this.editorForm.get('editor').value;
			this.show = false;
		} else {
			return false;
		}
	}

	addElement() {
		const p: HTMLParagraphElement = this.renderer.createElement('p');
		p.innerHTML = 'add new';
		this.renderer.appendChild(this.section.nativeElement, p);
	}
}
