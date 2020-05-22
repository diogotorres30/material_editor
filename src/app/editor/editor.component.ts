import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpService} from '../http.service';
import {IIssue} from './issue';
import {FormControl, FormGroup} from '@angular/forms';
import {FetchComplexRelatorioGQL, FetchFindingsGQL, Finding, Maybe} from "../../generated/graphql";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  complexRelatorio: any
  localListData: Maybe<Array<{ __typename?: "Finding" } & Pick<Finding, "title" | "description" | "impact" | "remediation" | "cvssVector" | "severity" | "otherReferences">>>
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'title',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
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
  @ViewChild('sRef') section: ElementRef;
  editorForm: FormGroup;
  editorContent: string;
  show: boolean = true;
  pageHeight: number;
  editorStyle = {
    height: '800px'
  };

  constructor(private _http: HttpService, private renderer: Renderer2, private fetchFindingsGQL: FetchFindingsGQL, private fetchComplexRelatorioGQL: FetchComplexRelatorioGQL) {
  }

  ngOnInit() {
    this.fetchFindingsGQL.watch().valueChanges.subscribe((result => {
      this.localListData = result.data.fetchFindings;
      this.listData = new MatTableDataSource(result.data.fetchFindings);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    }))
    this.fetchComplexRelatorioGQL.watch({id: "5ec5d760cc05a73968743096"}).valueChanges.subscribe(result => {
      this.complexRelatorio = result.data.fetchComplexRelatorio
    })


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

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  ngAfterViewInit() {
    this.pageHeight = this.section.nativeElement.offsetHeight;
  }

  onSubmit() {
    this.editorContent = this.editorForm.get('editor').value;
    // console.log(this.editorForm.get('editor').value);
    this.show = false;
  }

  pageGrowth(element) {
    if (element.offsetHeight / this.pageHeight > 1) {
      var dottedLine = this.renderer.createElement('div');
      this.renderer.setAttribute(dottedLine, 'class', "myPageBreak")
    }
  }

  onDblClick() {
    this.show = true;
  }

}
