import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpService} from '../http.service';
import {NewRelatorioFormService} from '../shared/new-relatorio-form.service';
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
  FillExecutiveSummaryGQL,
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
} from '../../generated/graphql';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {CoverService} from '../shared/cover.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CoverComponent} from './cover/cover.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public complexRelatorio: { __typename?: 'ComplexRelatorio' } & Pick<ComplexRelatorio, 'id'> & {
    // tslint:disable-next-line:max-line-length
    cover?: Maybe<{ __typename?: 'Cover' } & Pick<Cover, 'companyLogo' | 'reportTitle' | 'targetCompany' | 'classification' | 'version' | 'remarks' | 'date'>>; executiveSummary?: Maybe<{ __typename?: 'ExecutiveSummary' } & Pick<ExecutiveSummary, 'summary' | 'recommendations'>>; introduction?: Maybe<{ __typename?: 'Introduction' } & Pick<Introduction, 'documentInformation' | 'responsibilityStatement' | 'classification' | 'documentOwner' | 'disclaimer'> & { authorsAndReviewers?: Maybe<{ __typename?: 'AuthorsAndReviewers' } & Pick<AuthorsAndReviewers, 'approvers' | 'reviewers' | 'authors'>>; documentManagement?: Maybe<Array<Maybe<{ __typename?: 'DocumentManagement' } & Pick<DocumentManagement, 'version' | 'date' | 'editor' | 'remarks'>>>>; documentStructure?: Maybe<{ __typename?: 'DocumentStructure' } & Pick<DocumentStructure, 'sectionsIntro' | 'sections' | 'appendicesIntro' | 'appendices'>> }>; assessmentInformation?: Maybe<{ __typename?: 'AssessmentInformation' } & Pick<AssessmentInformation, 'constraints' | 'proceduresAfterTheAssessment'> & { assessmentScope?: Maybe<{ __typename?: 'AssessmentScope' } & Pick<AssessmentScope, 'executionPeriod' | 'assetNames' | 'assetsDescription' | 'assetAddresses'>>; organizationalAndTechnicalContacts?: Maybe<Array<Maybe<{ __typename?: 'OrganizationalAndTechnicalContacts' } & Pick<OrganizationalAndTechnicalContacts, 'role' | 'name' | 'contact'>>>> }>; summaryOfAssessmentResults?: Maybe<{ __typename?: 'SummaryOfAssessmentResults' } & {
      // tslint:disable-next-line:max-line-length
      staticInformation?: Maybe<{ __typename?: 'StaticInformation' } & Pick<StaticInformation, 'intro' | 'critical' | 'high' | 'moderate' | 'low' | 'minor' | 'cvss3'> & { cvss3Metrics?: Maybe<{ __typename?: 'Cvss3Metrics' } & { availability?: Maybe<{ __typename?: 'Availability' } & Pick<Availability, 'intro' | 'high' | 'none' | 'low'>>; integrity?: Maybe<{ __typename?: 'Integrity' } & Pick<Integrity, 'intro' | 'high' | 'low' | 'none'>>; confidentiality?: Maybe<{ __typename?: 'Confidentiality' } & Pick<Confidentiality, 'intro' | 'high' | 'low' | 'none'>>; scope?: Maybe<{ __typename?: 'Scope' } & Pick<Scope, 'intro' | 'changed' | 'unchanged'>>; userInteraction?: Maybe<{ __typename?: 'UserInteraction' } & Pick<UserInteraction, 'intro' | 'none' | 'required'>>; privilegesRequired?: Maybe<{ __typename?: 'PrivilegesRequired' } & Pick<PrivilegesRequired, 'intro' | 'none' | 'high' | 'low'>>; attackComplexity?: Maybe<{ __typename?: 'AttackComplexity' } & Pick<AttackComplexity, 'intro' | 'high' | 'low'>>; attackVector?: Maybe<{ __typename?: 'AttackVector' } & Pick<AttackVector, 'intro' | 'network' | 'adjacent' | 'local' | 'physical'>> }> }>; minorSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>
    }>; assessmentDetails?: Maybe<{ __typename?: 'AssessmentDetails' } & Pick<AssessmentDetails, 'intro'> & {
      // tslint:disable-next-line:max-line-length
      minorSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>
    }>; appendix?: Maybe<{ __typename?: 'Appendix' } & Pick<Appendix, 'tools' | 'evidences'>>
  };
  // tslint:disable-next-line:max-line-length
  localListData: Maybe<Array<{ __typename?: 'Finding' } & Pick<Finding, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'severity' | 'otherReferences'>>>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'title',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  public issues = [];
  @ViewChild('sRef') section: ElementRef;
  editorForm: FormGroup;
  editorContent: string;
  show = false;
  pageHeight: number;
  editorStyle = {
    height: '800px'
  };
  objectKeys = Object.keys;
  sectionCounter = 0;

  constructor(
    private _http: HttpService,
    private relatorioFormService: NewRelatorioFormService,
    private renderer: Renderer2,
    private dialog: MatDialog,
    private fetchFindingsGQL: FetchFindingsGQL,
    private fetchComplexRelatorioGQL: FetchComplexRelatorioGQL,
    private coverService: CoverService,
    private fillExecutiveSummaryGQL: FillExecutiveSummaryGQL) {
  }

  ngOnInit() {
    this.fetchFindingsGQL.watch().valueChanges.subscribe((result => {
      this.localListData = result.data.fetchFindings;
      this.listData = new MatTableDataSource(result.data.fetchFindings);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    }));
    this.fetchComplexRelatorioGQL.watch({id: this.relatorioFormService.showRelatorioId}).valueChanges.subscribe(result => {
      this.complexRelatorio = result.data.fetchComplexRelatorio;
      this.coverService.complexrelatorio2 = result.data.fetchComplexRelatorio;

      let vulCounter = 1;
      let subVulCounter = 1;

      this.createRow('1', 'Executive Summary', '2', 'initialContents');
      this.createRow('2', 'Introduction', '3', 'initialContents');
      this.createTdRow('', '2.1 Document Information', '3', 'initialContents');
      this.createTdRow('', '2.2 Document Structure', '5', 'initialContents');
      this.createTdRow('', '2.3 Disclaimer', '6', 'initialContents');
      this.createRow('3', 'Assessment Information', '7', 'initialContents');
      this.createTdRow('', '3.1 Assessment Scope', '7', 'initialContents');
      this.createTdRow('', '3.2 Organizational and Technical Contacts', '7', 'initialContents');
      this.createTdRow('', '3.3 Constraints', '8', 'initialContents');
      this.createTdRow('', '3.4 Procedures After the Assessment', '9', 'initialContents');
      this.createRow('4', 'Summary of Assessment Results', '10', 'summarizedVulnerabilities');

      let severities = Object.keys(result.data.fetchComplexRelatorio.summaryOfAssessmentResults).reverse().splice(1, 5);
      let indexCount = 19;
      for (const vul of severities) {
        this.createTdRow('', '4.' + vulCounter + ' ' + this.capitalize(vul), indexCount.toString(), 'summarizedVulnerabilities');
        if (result.data.fetchComplexRelatorio.summaryOfAssessmentResults[vul].summarizedIssues.length > 0) {
          indexCount = indexCount + result.data.fetchComplexRelatorio.summaryOfAssessmentResults[vul].summarizedIssues.length;
        } else {
          indexCount++;
        }
        vulCounter++;
      }

      vulCounter = 1;
      this.createRow('5', 'Assessment Details', indexCount.toString(), 'detailedVulnerabilities');
      indexCount++;

      severities = Object.keys(result.data.fetchComplexRelatorio.assessmentDetails).reverse().splice(1, 5);
      for (const vul of severities) {
        this.createTdRow('', '5.' + vulCounter + ' ' + this.capitalize(vul), indexCount.toString(), 'detailedVulnerabilities');
        if (result.data.fetchComplexRelatorio.assessmentDetails[vul].detailedIssues.length < 1) {
          indexCount++;
        }

        for (const subIssue of result.data.fetchComplexRelatorio.assessmentDetails[vul].detailedIssues) {
          // tslint:disable-next-line:max-line-length
          this.createTdRow('', '5.' + vulCounter + '.' + subVulCounter + ' ' + subIssue.title, indexCount.toString(), 'detailedVulnerabilities');
          indexCount += 2;
          subVulCounter++;
        }
        vulCounter++;
      }

      // document.getElementById("initialContents")
      // let phrase = document.createElement("p")
      // for (let i = 0; i < 40; i++) {
      //   phrase = document.createElement("p")
      //   phrase.textContent = i.toString()
      //   phrase.setAttribute("id", i.toString() + "AAA")
      //   document.getElementById("tableContents").appendChild(phrase)
      //   console.log(phrase.offsetTop)
      //
      //   if (phrase.offsetTop > 970) {
      //     let newContentsPage = document.createElement("section")
      //     newContentsPage.setAttribute("class", "sheet")
      // tslint:disable-next-line:max-line-length
      //     newContentsPage.style.cssText = "width: 210mm; min-height: 296mm;overflow: visible;position: relative;box-sizing: border-box;page-break-after: always;font-family: Roboto, \"Helvetica Neue\", sans-serif;background: white;box-shadow: 0 .5mm 2mm rgba(0, 0, 0, .3);margin: 5mm auto;padding: 10mm;"
      //     newContentsPage.setAttribute("id", "contentsPage2")
      //     newContentsPage.textContent = "JKL"
      //     document.getElementById("tableContents").insertAdjacentElement("afterend", newContentsPage)
      //     for (let j = i; j < 40; j++) {
      //       phrase = document.createElement("p")
      //       phrase.textContent = j.toString()
      //       phrase.setAttribute("id", i.toString() + "AAA")
      //       document.getElementById("contentsPage2").appendChild(phrase)
      //     }
      //     break
      //   }
      // }


    });


    this._http.getIssues().subscribe((data) => {
      this.issues = data;
      data.forEach((element) => {
        // console.log(element);
        for (const leo in element) {
          // console.log(element[leo]);
        }
      });
    });
    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    });
  }

  fillCover(rel) {
    this.coverService.relId = rel.id;
    this.coverService.initializeFormGroup(rel);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(CoverComponent, dialogConfig);
  }

  createRow(sec, title, pageNum, target) {
    const row = document.createElement('tr');
    row.appendChild(this.createTh(sec));
    row.appendChild(this.createTh(title));
    row.appendChild(this.createTh(pageNum));
    document.getElementById(target).appendChild(row);
  }

  createTdRow(a, title, pageNum, target) {
    const row = document.createElement('tr');
    row.appendChild(this.createTd(a));
    row.appendChild(this.createTd(title));
    row.appendChild(this.createTd(pageNum));
    document.getElementById(target).appendChild(row);
  }

  createTd(content) {
    const td = document.createElement('td');
    td.textContent = content;
    return td;
  }

  createTh(content) {
    const th = document.createElement('th');
    th.textContent = content;
    return th;
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  subset(arr) {
    return Object.keys(arr).splice(1, Object.keys(arr).length - 2);
  }

  capitalizeAndInitials(a) {
    const parts = a.split(/(?=[A-Z])/);
    let title = '';
    let initials = '';
    for (const word of parts) {
      title += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
      initials += word.charAt(0).toUpperCase();
    }
    return title + '(' + initials + ')';
  }

  capitalize(a) {
    const parts = a.split(/(?=[A-Z])/);
    let title = '';
    for (const word of parts) {
      title += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    }
    return title;
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }


  onSubmit() {
    this.editorContent = this.editorForm.get('editor').value;
    this.fillExecutiveSummaryGQL.mutate({
      relId: this.complexRelatorio.id,
      summary: this.editorForm.get('editor').value
    }).subscribe(result => {
      console.log(result.data.fillExecutiveSummary.executiveSummary.summary);
    });
    this.show = false;
  }


  onDblClick() {
    this.show = true;
  }

}
