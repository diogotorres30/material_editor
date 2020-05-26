import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpService} from '../http.service';
import {IIssue} from './issue';
import {FormControl, FormGroup} from '@angular/forms';
import {
  Appendix,
  AssessmentDetailed,
  AssessmentDetails,
  AssessmentInformation,
  AssessmentScope,
  AssessmentSummarized,
  AuthorsAndReviewers,
  ComplexRelatorio,
  DocumentManagement,
  ExecutiveSummary,
  FetchComplexRelatorioGQL,
  FetchFindingsGQL,
  Finding,
  Introduction,
  Maybe,
  OrganizationalAndTechnicalContacts,
  SummaryOfAssessmentResults
} from "../../generated/graphql";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  complexRelatorio: { __typename?: "ComplexRelatorio" } & Pick<ComplexRelatorio, "id" | "companyLogo" | "reportTitle" | "targetCompany" | "classification" | "version" | "remarks" | "date"> & {
    executiveSummary?: Maybe<{ __typename?: "ExecutiveSummary" } & Pick<ExecutiveSummary, "summary" | "recommendations">>; introduction?: Maybe<{ __typename?: "Introduction" } & Pick<Introduction, "documentInformation" | "responsibilityStatement" | "classification" | "documentOwner" | "documentStructure" | "disclaimer"> & { authorsAndReviewers?: Maybe<{ __typename?: "AuthorsAndReviewers" } & Pick<AuthorsAndReviewers, "approvers" | "reviewers" | "authors">>; documentManagement?: Maybe<Array<Maybe<{ __typename?: "DocumentManagement" } & Pick<DocumentManagement, "version" | "date" | "editor" | "remarks">>>> }>; assessmentInformation?: Maybe<{ __typename?: "AssessmentInformation" } & Pick<AssessmentInformation, "constraints" | "proceduresAfterTheAssessment"> & { assessmentScope?: Maybe<{ __typename?: "AssessmentScope" } & Pick<AssessmentScope, "executionPeriod" | "assetNames" | "assetsDescription" | "assetAddresses">>; organizationalAndTechnicalContacts?: Maybe<Array<Maybe<{ __typename?: "OrganizationalAndTechnicalContacts" } & Pick<OrganizationalAndTechnicalContacts, "role" | "name" | "contact">>>> }>; summaryOfAssessmentResults?: Maybe<{ __typename?: "SummaryOfAssessmentResults" } & Pick<SummaryOfAssessmentResults, "staticInformation"> & { minorSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "vulnerability" | "description" | "details">>>>; lowSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "vulnerability" | "description" | "details">>>>; moderateSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "vulnerability" | "description" | "details">>>>; criticalSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "vulnerability" | "description" | "details">>>>; highSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "vulnerability" | "description" | "details">>>> }>; assessmentDetails?: Maybe<{ __typename?: "AssessmentDetails" } & Pick<AssessmentDetails, "staticInformation"> & {
      minorSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>>; lowSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>>; moderateSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>>; criticalSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>>; highSeverityVulnerabilities?: Maybe<Array<Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>>
    }>; appendix?: Maybe<{ __typename?: "Appendix" } & Pick<Appendix, "tools" | "evidences">>
  }
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
    this.fetchComplexRelatorioGQL.watch({id: "5ecc7434872ff1b959ade7ad"}).valueChanges.subscribe(result => {
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
