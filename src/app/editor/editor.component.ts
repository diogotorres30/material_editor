import {Component, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
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
  Auditor,
  Availability,
  Client,
  ComplexIssue,
  ComplexRelatorio,
  Confidentiality,
  Cover,
  DetailedIssue,
  DocumentManagement,
  FetchComplexRelatorioGQL,
  FetchFindingsGQL,
  FetchProjectGQL,
  FillConstraintsGQL,
  FillDocumentStructureGQL,
  FillExecutiveSummaryGQL,
  FillProceduresGQL,
  Integrity,
  Introduction, IssueFigure,
  Maybe,
  PrivilegesRequired,
  Project,
  ProjectManager,
  Relatorio,
  Reviewer,
  Scalars,
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
import {AssessmentScopeService} from '../shared/assessment-scope.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CoverComponent} from './cover/cover.component';
import {DocManagementService} from '../shared/doc-management.service';
import {DocManagementComponent} from './doc-management/doc-management.component';
import {TechnicalDetailsComponent} from './technical-details/technical-details.component';
import {AssessmentScopeComponent} from './assessment-scope/assessment-scope.component';
import {TechnicalDetailsService} from '../shared/technical-details.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'title',
    'actions'
  ];

  complexIssuesColumns: string[] = [
    'title',
    'severity',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) complexIssuesSort: MatSort;
  @ViewChild('paginator', {static: true}) paginator: MatPaginator;
  @ViewChild('complexIssuesPaginator', {static: true}) complexIssuesPaginator: MatPaginator;
  searchKey: string;
  selectedSeverity: string;
  executiveSummaryForm: FormGroup;
  documentStructureForm: FormGroup;
  constraintsForm: FormGroup;
  proceduresForm: FormGroup;
  executiveSummaryQuill = false;
  documentStructureQuill = false;
  constraintsQuill = false;
  proceduresQuill = false;
  severities = [
    'criticalSeverityVulnerabilities',
    'highSeverityVulnerabilities',
    'moderateSeverityVulnerabilities',
    'lowSeverityVulnerabilities',
    'minorSeverityVulnerabilities',
  ];

  cvss3MetricsNames = [
    'attackVector',
    'attackComplexity',
    'privilegesRequired',
    'userInteraction',
    'scope',
    'confidentiality',
    'integrity',
    'availability'
  ];
  editorStyle = {
    height: '800px'
  };
  currentProj: Maybe<{ __typename?: 'Project' } & Pick<Project, 'id' | 'name' | 'status'> & { relatorios?: Maybe<Array<{ __typename?: 'Relatorio' } & Pick<Relatorio, 'id' | 'name' | 'status' | 'revDeadline' | 'delDeadline' | 'complexRelatorioId'>>>; auditor?: Maybe<Array<{ __typename?: 'Auditor' } & Pick<Auditor, 'id' | 'name' | 'email' | 'role'>>>; reviewer?: Maybe<Array<{ __typename?: 'Reviewer' } & Pick<Reviewer, 'id' | 'name' | 'email' | 'role'>>>; projectManager?: Maybe<Array<{ __typename?: 'ProjectManager' } & Pick<ProjectManager, 'id' | 'name' | 'email' | 'role'>>>; client?: Maybe<Array<{ __typename?: 'Client' } & Pick<Client, 'id' | 'name' | 'email'>>> }>;
  auditors: Maybe<Array<{ __typename?: 'Auditor' } & Pick<Auditor, 'id' | 'name' | 'email' | 'role'>>>;
  projectManagers: Maybe<Array<{ __typename?: 'ProjectManager' } & Pick<ProjectManager, 'id' | 'name' | 'email' | 'role'>>>;
  reviewers: Maybe<Array<{ __typename?: 'Reviewer' } & Pick<Reviewer, 'id' | 'name' | 'email' | 'role'>>>;
  documentManagement: Maybe<Array<Maybe<{ __typename?: 'DocumentManagement' } & Pick<DocumentManagement, 'version' | 'date' | 'editor' | 'remarks'>>>>;


  client: Maybe<Array<{ __typename?: 'Client' } & Pick<Client, 'id' | 'name' | 'email'>>>;
  private auxString: string;

  constraints: Maybe<Scalars['String']>;
  procedures: Maybe<Scalars['String']>;
  // tslint:disable-next-line:max-line-length
  staticInformation: Maybe<{ __typename?: 'StaticInformation' } & Pick<StaticInformation, 'intro' | 'cvss3'> & { cvss3Metrics?: Maybe<{ __typename?: 'Cvss3Metrics' } & { availability?: Maybe<{ __typename?: 'Availability' } & Pick<Availability, 'intro' | 'high' | 'none' | 'low'>>; integrity?: Maybe<{ __typename?: 'Integrity' } & Pick<Integrity, 'intro' | 'high' | 'low' | 'none'>>; confidentiality?: Maybe<{ __typename?: 'Confidentiality' } & Pick<Confidentiality, 'intro' | 'high' | 'low' | 'none'>>; scope?: Maybe<{ __typename?: 'Scope' } & Pick<Scope, 'intro' | 'changed' | 'unchanged'>>; userInteraction?: Maybe<{ __typename?: 'UserInteraction' } & Pick<UserInteraction, 'intro' | 'none' | 'required'>>; privilegesRequired?: Maybe<{ __typename?: 'PrivilegesRequired' } & Pick<PrivilegesRequired, 'intro' | 'none' | 'high' | 'low'>>; attackComplexity?: Maybe<{ __typename?: 'AttackComplexity' } & Pick<AttackComplexity, 'intro' | 'high' | 'low'>>; attackVector?: Maybe<{ __typename?: 'AttackVector' } & Pick<AttackVector, 'intro' | 'network' | 'adjacent' | 'local' | 'physical'>> }> }>;
  executiveSummary: Maybe<Scalars['String']>;


  // tslint:disable-next-line:max-line-length
  complexIssues: Maybe<Array<Maybe<{ __typename?: 'ComplexIssue' } & Pick<ComplexIssue, 'id' | 'severity' | 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>>;
  sortedIssues: any;
  complexIssuesDateSource: MatTableDataSource<any>;
  documentStructure: Maybe<Scalars['String']>;

  // tslint:disable-next-line:max-line-length
  cvss3Metrics: Maybe<{ __typename?: 'Cvss3Metrics' } & { availability?: Maybe<{ __typename?: 'Availability' } & Pick<Availability, 'intro' | 'high' | 'none' | 'low'>>; integrity?: Maybe<{ __typename?: 'Integrity' } & Pick<Integrity, 'intro' | 'high' | 'low' | 'none'>>; confidentiality?: Maybe<{ __typename?: 'Confidentiality' } & Pick<Confidentiality, 'intro' | 'high' | 'low' | 'none'>>; scope?: Maybe<{ __typename?: 'Scope' } & Pick<Scope, 'intro' | 'changed' | 'unchanged'>>; userInteraction?: Maybe<{ __typename?: 'UserInteraction' } & Pick<UserInteraction, 'intro' | 'none' | 'required'>>; privilegesRequired?: Maybe<{ __typename?: 'PrivilegesRequired' } & Pick<PrivilegesRequired, 'intro' | 'none' | 'high' | 'low'>>; attackComplexity?: Maybe<{ __typename?: 'AttackComplexity' } & Pick<AttackComplexity, 'intro' | 'high' | 'low'>>; attackVector?: Maybe<{ __typename?: 'AttackVector' } & Pick<AttackVector, 'intro' | 'network' | 'adjacent' | 'local' | 'physical'>> }>;
  complexRelatorio: { __typename?: 'ComplexRelatorio' } & Pick<ComplexRelatorio, 'id' | 'relId' | 'projId' | 'executiveSummary'> & {
    complexIssues?: Maybe<Array<Maybe<{ __typename?: 'ComplexIssue' } & Pick<ComplexIssue, 'id' | 'severity' | 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'> & { issueFigures?: Maybe<Array<Maybe<{ __typename?: 'IssueFigure' } & Pick<IssueFigure, 'url' | 'caption'>>>> }>>>; cover?: Maybe<{ __typename?: 'Cover' } & Pick<Cover, 'companyLogo' | 'reportTitle' | 'targetCompany' | 'classification' | 'version' | 'remarks' | 'date'>>; introduction?: Maybe<{ __typename?: 'Introduction' } & Pick<Introduction, 'responsibilityStatement' | 'documentStructure' | 'disclaimer'> & { documentManagement?: Maybe<Array<Maybe<{ __typename?: 'DocumentManagement' } & Pick<DocumentManagement, 'version' | 'date' | 'editor' | 'remarks'>>>> }>; assessmentInformation?: Maybe<{ __typename?: 'AssessmentInformation' } & Pick<AssessmentInformation, 'constraints' | 'proceduresAfterTheAssessment'> & { assessmentScope?: Maybe<{ __typename?: 'AssessmentScope' } & Pick<AssessmentScope, 'executionPeriod' | 'assetNames' | 'assetsDescription' | 'assetAddresses'>> }>; summaryOfAssessmentResults?: Maybe<{ __typename?: 'SummaryOfAssessmentResults' } & {
      staticInformation?: Maybe<{ __typename?: 'StaticInformation' } & Pick<StaticInformation, 'intro' | 'cvss3'> & { cvss3Metrics?: Maybe<{ __typename?: 'Cvss3Metrics' } & { availability?: Maybe<{ __typename?: 'Availability' } & Pick<Availability, 'intro' | 'high' | 'none' | 'low'>>; integrity?: Maybe<{ __typename?: 'Integrity' } & Pick<Integrity, 'intro' | 'high' | 'low' | 'none'>>; confidentiality?: Maybe<{ __typename?: 'Confidentiality' } & Pick<Confidentiality, 'intro' | 'high' | 'low' | 'none'>>; scope?: Maybe<{ __typename?: 'Scope' } & Pick<Scope, 'intro' | 'changed' | 'unchanged'>>; userInteraction?: Maybe<{ __typename?: 'UserInteraction' } & Pick<UserInteraction, 'intro' | 'none' | 'required'>>; privilegesRequired?: Maybe<{ __typename?: 'PrivilegesRequired' } & Pick<PrivilegesRequired, 'intro' | 'none' | 'high' | 'low'>>; attackComplexity?: Maybe<{ __typename?: 'AttackComplexity' } & Pick<AttackComplexity, 'intro' | 'high' | 'low'>>; attackVector?: Maybe<{ __typename?: 'AttackVector' } & Pick<AttackVector, 'intro' | 'network' | 'adjacent' | 'local' | 'physical'>> }> }>; minorSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>
    }>; assessmentDetails?: Maybe<{ __typename?: 'AssessmentDetails' } & Pick<AssessmentDetails, 'intro'> & {
      minorSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>
    }>; appendix?: Maybe<{ __typename?: 'Appendix' } & Pick<Appendix, 'tools' | 'evidences'>>
  };


  constructor(
    private relatorioFormService: NewRelatorioFormService,
    private renderer: Renderer2,
    private dialog: MatDialog,
    private fetchFindingsGQL: FetchFindingsGQL,
    private fetchComplexRelatorioGQL: FetchComplexRelatorioGQL,
    private coverService: CoverService,
    private fillExecutiveSummaryGQL: FillExecutiveSummaryGQL,
    private fetchProjectGQL: FetchProjectGQL,
    private docManagementService: DocManagementService,
    private fillDocumentStructureGQL: FillDocumentStructureGQL,
    private assessmentScopeService: AssessmentScopeService,
    private fillConstraintsGQL: FillConstraintsGQL,
    private fillProceduresGQL: FillProceduresGQL,
    private technicalDetailsService: TechnicalDetailsService
  ) {
  }

  ngOnInit() {
    this.fetchFindingsGQL.watch().valueChanges.subscribe(result => {
      // this.localListData = result.data.fetchFindings;
      this.listData = new MatTableDataSource(result.data.fetchFindings);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });


    this.fetchComplexRelatorioGQL.watch({id: this.relatorioFormService.showRelatorioId}).valueChanges.subscribe(result => {
      this.fetchProjectGQL.watch({id: result.data.fetchComplexRelatorio.projId}).valueChanges.subscribe(projResult => {
        this.currentProj = projResult.data.fetchProject;
        this.client = projResult.data.fetchProject.client;
        this.auditors = projResult.data.fetchProject.auditor;
        this.reviewers = projResult.data.fetchProject.reviewer;
        this.projectManagers = projResult.data.fetchProject.projectManager;
      });
      this.complexRelatorio = result.data.fetchComplexRelatorio;
      this.documentManagement = result.data.fetchComplexRelatorio.introduction.documentManagement;
      this.documentStructure = result.data.fetchComplexRelatorio.introduction.documentStructure;
      this.cvss3Metrics = result.data.fetchComplexRelatorio.summaryOfAssessmentResults.staticInformation.cvss3Metrics;
      this.constraints = result.data.fetchComplexRelatorio.assessmentInformation.constraints;
      this.procedures = result.data.fetchComplexRelatorio.assessmentInformation.proceduresAfterTheAssessment;
      this.coverService.complexrelatorio2 = result.data.fetchComplexRelatorio;
      this.staticInformation = result.data.fetchComplexRelatorio.summaryOfAssessmentResults.staticInformation;
      this.executiveSummary = result.data.fetchComplexRelatorio.executiveSummary;
      this.complexIssues = result.data.fetchComplexRelatorio.complexIssues;
      this.complexIssuesDateSource = new MatTableDataSource(result.data.fetchComplexRelatorio.complexIssues);
      this.complexIssuesDateSource.paginator = this.complexIssuesPaginator;
      this.complexIssuesDateSource.sort = this.complexIssuesSort;
      this.sortedIssues = {
        criticalSeverityVulnerabilities: this.complexIssues.filter(el => el.severity === 'criticalSeverityVulnerabilities'),
        highSeverityVulnerabilities: this.complexIssues.filter(el => el.severity === 'highSeverityVulnerabilities'),
        moderateSeverityVulnerabilities: this.complexIssues.filter(el => el.severity === 'moderateSeverityVulnerabilities'),
        lowSeverityVulnerabilities: this.complexIssues.filter(el => el.severity === 'lowSeverityVulnerabilities'),
        minorSeverityVulnerabilities: this.complexIssues.filter(el => el.severity === 'minorSeverityVulnerabilities')
      };

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

      // let severities = Object.keys(result.data.fetchComplexRelatorio.summaryOfAssessmentResults).reverse().splice(1, 5);
      let indexCount = 20;
      for (const vul of this.severities) {
        this.createTdRow('', '4.' + vulCounter + ' ' + this.capitalize(vul), indexCount.toString(), 'summarizedVulnerabilities');
        if (this.sortedIssues[vul].length > 0) {
          indexCount = indexCount + Math.ceil(this.sortedIssues[vul].length / 3);
        } else {
          indexCount++;
        }
        vulCounter++;
      }

      vulCounter = 1;
      this.createRow('5', 'Assessment Details', indexCount.toString(), 'detailedVulnerabilities');
      indexCount++;

      // severities = Object.keys(result.data.fetchComplexRelatorio.assessmentDetails).reverse().splice(1, 5);
      for (const vul of this.severities) {
        this.createTdRow('', '5.' + vulCounter + ' ' + this.capitalize(vul), indexCount.toString(), 'detailedVulnerabilities');
        if (this.sortedIssues[vul].length < 1) {
          indexCount++;
        }

        for (const subIssue of this.sortedIssues[vul]) {
          // tslint:disable-next-line:max-line-length
          this.createTdRow('', '5.' + vulCounter + '.' + subVulCounter + ' ' + subIssue.title, indexCount.toString(), 'detailedVulnerabilities');
          indexCount += 2;
          subVulCounter++;
        }
        vulCounter++;
      }

    });


    this.executiveSummaryForm = new FormGroup({
      executiveSummaryFormControl: new FormControl(null)
    });
    this.documentStructureForm = new FormGroup({
      documentStructureFormControl: new FormControl(null)
    });
    this.constraintsForm = new FormGroup({
      constraintsFormControl: new FormControl(null)
    });
    this.proceduresForm = new FormGroup({
      proceduresFormControl: new FormControl(null)
    });
  }

  groupArr(data, n) {
    const group = [];
    for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) {
        j++;
      }
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }
    return group;
  }

  fillCover(rel) {
    this.coverService.relId = rel.id;
    this.coverService.initializeFormGroup(rel);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(CoverComponent, dialogConfig);
  }

  // fillDocumentManagement(rel){
  //   this.docManagementService.relId = rel.id;
  //   // this.docManagementService.initializeFormGroup(rel);
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '80%';
  //   this.dialog.open(DocManagementComponent, dialogConfig);
  // }


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

  flatten(messy: any, target) {
    this.auxString = '';
    for (const rel of messy) {
      this.auxString += ', ' + rel[target];
    }
    return this.auxString.substring(2);
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

  firstWord(a) {
    const parts = a.split(/(?=[A-Z])/);
    return parts[0];
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }


  executiveSummarySubmit() {
    // this.executiveSummaryContent = this.executiveSummaryForm.get('executiveSummaryFormControl').value;
    this.fillExecutiveSummaryGQL.mutate({
      id: this.complexRelatorio.id,
      summary: this.executiveSummaryForm.get('executiveSummaryFormControl').value
    }).subscribe(() => {
    });
    this.executiveSummaryQuill = false;
  }

  documentStructureSubmit() {
    // this.appendixContent = this.executiveSummaryForm.get('executiveSummaryFormControl').value;
    this.fillDocumentStructureGQL.mutate({
      id: this.complexRelatorio.id,
      docStructure: this.documentStructureForm.get('documentStructureFormControl').value
    }).subscribe(() => {
    });
    this.documentStructureQuill = false;
  }

  constraintsSubmit() {
    // this.appendixContent = this.executiveSummaryForm.get('executiveSummaryFormControl').value;
    this.fillConstraintsGQL.mutate({
      id: this.complexRelatorio.id,
      constraints: this.constraintsForm.get('constraintsFormControl').value
    }).subscribe(() => {
    });
    this.constraintsQuill = false;
  }

  proceduresSubmit() {
    // this.appendixContent = this.executiveSummaryForm.get('executiveSummaryFormControl').value;
    this.fillProceduresGQL.mutate({
      id: this.complexRelatorio.id,
      procedures: this.proceduresForm.get('proceduresFormControl').value
    }).subscribe(() => {
    });
    this.proceduresQuill = false;
  }


  fillExecutiveSummary() {
    this.executiveSummaryQuill = true;
  }

  fillDocumentStructure() {
    this.documentStructureQuill = true;
  }

  fillDocumentManagement(rel) {
    this.docManagementService.relId = rel.id;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(DocManagementComponent, dialogConfig);
  }

  fillAssessmentScope(rel) {
    this.assessmentScopeService.relId = rel.id;
    this.assessmentScopeService.initializeFormGroup(rel);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(AssessmentScopeComponent, dialogConfig);
  }


  fillConstraints() {
    this.constraintsQuill = true;
  }

  fillProcedures() {
    this.proceduresQuill = true;
  }

  printIssueId(rel, finding) {
    this.coverService.addComplexIssue(rel.id, finding.id, this.selectedSeverity);
  }

  removeComplexIssue(rel, issue) {
    this.coverService.removeComplexIssue(rel.id, issue.id);
  }

  onFileSelected(event) {
    console.log(event);
  }

  fillTechnicalDetails(complexRelatorio, complexIssue) {
    this.technicalDetailsService.relId = complexRelatorio.id;
    this.technicalDetailsService.issueId = complexIssue.id;
    // this.technicalDetailsService.initializeFormGroup(complexIssue);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(TechnicalDetailsComponent, dialogConfig);
  }
}
