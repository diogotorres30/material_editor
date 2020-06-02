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
  AttackComplexity,
  AttackVector,
  AuthorsAndReviewers,
  Availability,
  ComplexRelatorio,
  Confidentiality,
  Cover,
  DetailedIssue,
  DocumentManagement,
  DocumentStructure,
  ExecutiveSummary,
  FetchComplexRelatorioGQL,
  FetchFindingsGQL,
  Finding,
  Integrity,
  Introduction,
  Maybe,
  OrganizationalAndTechnicalContacts,
  PrivilegesRequired,
  Scope,
  StaticInformation,
  SummarizedIssue,
  SummaryOfAssessmentResults,
  UserInteraction
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
  complexRelatorio: { __typename?: "ComplexRelatorio" } & Pick<ComplexRelatorio, "id"> & {
    cover?: Maybe<{ __typename?: "Cover" } & Pick<Cover, "companyLogo" | "reportTitle" | "targetCompany" | "classification" | "version" | "remarks" | "date">>; executiveSummary?: Maybe<{ __typename?: "ExecutiveSummary" } & Pick<ExecutiveSummary, "summary" | "recommendations">>; introduction?: Maybe<{ __typename?: "Introduction" } & Pick<Introduction, "documentInformation" | "responsibilityStatement" | "classification" | "documentOwner" | "disclaimer"> & { authorsAndReviewers?: Maybe<{ __typename?: "AuthorsAndReviewers" } & Pick<AuthorsAndReviewers, "approvers" | "reviewers" | "authors">>; documentManagement?: Maybe<Array<Maybe<{ __typename?: "DocumentManagement" } & Pick<DocumentManagement, "version" | "date" | "editor" | "remarks">>>>; documentStructure?: Maybe<{ __typename?: "DocumentStructure" } & Pick<DocumentStructure, "sectionsIntro" | "sections" | "appendicesIntro" | "appendices">> }>; assessmentInformation?: Maybe<{ __typename?: "AssessmentInformation" } & Pick<AssessmentInformation, "constraints" | "proceduresAfterTheAssessment"> & { assessmentScope?: Maybe<{ __typename?: "AssessmentScope" } & Pick<AssessmentScope, "executionPeriod" | "assetNames" | "assetsDescription" | "assetAddresses">>; organizationalAndTechnicalContacts?: Maybe<Array<Maybe<{ __typename?: "OrganizationalAndTechnicalContacts" } & Pick<OrganizationalAndTechnicalContacts, "role" | "name" | "contact">>>> }>; summaryOfAssessmentResults?: Maybe<{ __typename?: "SummaryOfAssessmentResults" } & {
      staticInformation?: Maybe<{ __typename?: "StaticInformation" } & Pick<StaticInformation, "intro" | "critical" | "high" | "moderate" | "low" | "minor" | "cvss3"> & { cvss3Metrics?: Maybe<{ __typename?: "Cvss3Metrics" } & { availability?: Maybe<{ __typename?: "Availability" } & Pick<Availability, "intro" | "high" | "none" | "low">>; integrity?: Maybe<{ __typename?: "Integrity" } & Pick<Integrity, "intro" | "high" | "low" | "none">>; confidentiality?: Maybe<{ __typename?: "Confidentiality" } & Pick<Confidentiality, "intro" | "high" | "low" | "none">>; scope?: Maybe<{ __typename?: "Scope" } & Pick<Scope, "intro" | "changed" | "unchanged">>; userInteraction?: Maybe<{ __typename?: "UserInteraction" } & Pick<UserInteraction, "intro" | "none" | "required">>; privilegesRequired?: Maybe<{ __typename?: "PrivilegesRequired" } & Pick<PrivilegesRequired, "intro" | "none" | "high" | "low">>; attackComplexity?: Maybe<{ __typename?: "AttackComplexity" } & Pick<AttackComplexity, "intro" | "high" | "low">>; attackVector?: Maybe<{ __typename?: "AttackVector" } & Pick<AttackVector, "intro" | "network" | "adjacent" | "local" | "physical">> }> }>; minorSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>
    }>; assessmentDetails?: Maybe<{ __typename?: "AssessmentDetails" } & Pick<AssessmentDetails, "intro"> & {
      minorSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>
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
  @ViewChild('sRef') section: ElementRef;
  editorForm: FormGroup;
  editorContent: string;
  show: boolean = true;
  pageHeight: number;
  editorStyle = {
    height: '800px'
  };
  objectKeys = Object.keys;
  sectionCounter = 1

  constructor(private _http: HttpService, private renderer: Renderer2, private fetchFindingsGQL: FetchFindingsGQL, private fetchComplexRelatorioGQL: FetchComplexRelatorioGQL) {
  }

  ngOnInit() {
    this.fetchFindingsGQL.watch().valueChanges.subscribe((result => {
      this.localListData = result.data.fetchFindings;
      this.listData = new MatTableDataSource(result.data.fetchFindings);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    }))
    this.fetchComplexRelatorioGQL.watch({id: "5ed1b407e7c2b5f41f1e2138"}).valueChanges.subscribe(result => {
      this.complexRelatorio = result.data.fetchComplexRelatorio
      // let secCnt = {}
      // for (let i=0;i<300;i++) {
      //   let ppp = document.createElement("p")
      //   ppp.textContent = "LALALALLALALLALALA"
      //   document.getElementById("mememe").appendChild(ppp)
      //   console.log(this.pageGrowth(ppp))
      //   // secCnt[pag] = document.createElement("section")
      //   // secCnt[pag].setAttribute('class','sheet')
      //   // secCnt[pag].style = "width: 210mm; min-height: 296mm;overflow: visible;position: relative;box-sizing: border-box;page-break-after: always;font-family: Roboto, \"Helvetica Neue\", sans-serif;background: white;box-shadow: 0 .5mm 2mm rgba(0, 0, 0, .3);margin: 5mm auto;padding: 10mm;"
      // }
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

  subset(arr) {
    return Object.keys(arr).splice(1, Object.keys(arr).length - 2)
  }

  capitalizeAndInitials(a) {
    let parts = a.split(/(?=[A-Z])/)
    let title = ''
    let initials = ''
    for (let word of parts) {
      title += word.charAt(0).toUpperCase() + word.slice(1) + ' '
      initials += word.charAt(0).toUpperCase()
    }
    return title + '(' + initials + ')'
  }

  capitalize(a) {
    let parts = a.split(/(?=[A-Z])/)
    let title = ''
    for (let word of parts) {
      title += word.charAt(0).toUpperCase() + word.slice(1) + ' '
    }
    return title
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
    return (element.offsetHeight)
  }

  // pageGrowth(element) {
  //   if (element.offsetHeight / this.pageHeight > 1) {
  //     let dottedLine = this.renderer.createElement('div');
  //     this.renderer.setAttribute(dottedLine, 'class', "myPageBreak")
  //   }
  // }

  onDblClick() {
    this.show = true;
  }

}
