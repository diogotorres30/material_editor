import {Injectable} from '@angular/core';
import {
  AddComplexIssueGQL,
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
  DocumentStructure,
  FetchComplexRelatorioGQL,
  FetchProjectGQL,
  FillCoverGQL,
  Integrity,
  Introduction,
  Maybe,
  PrivilegesRequired,
  Project,
  ProjectManager,
  Relatorio, RemoveComplexIssueGQL,
  Reviewer,
  Scope,
  StaticInformation,
  SummarizedIssue,
  UserInteraction
} from '../../generated/graphql';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CoverService {
  relId: string;

  complexrelatorio2: { __typename?: 'ComplexRelatorio' } & Pick<ComplexRelatorio, 'id' | 'relId' | 'projId' | 'executiveSummary'> & {
    complexIssues?: Maybe<Array<Maybe<{ __typename?: 'ComplexIssue' } & Pick<ComplexIssue, 'id' | 'severity' | 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>>; cover?: Maybe<{ __typename?: 'Cover' } & Pick<Cover, 'companyLogo' | 'reportTitle' | 'targetCompany' | 'classification' | 'version' | 'remarks' | 'date'>>; introduction?: Maybe<{ __typename?: 'Introduction' } & Pick<Introduction, 'responsibilityStatement' | 'disclaimer'> & { documentManagement?: Maybe<Array<Maybe<{ __typename?: 'DocumentManagement' } & Pick<DocumentManagement, 'version' | 'date' | 'editor' | 'remarks'>>>>; documentStructure?: Maybe<{ __typename?: 'DocumentStructure' } & Pick<DocumentStructure, 'appendicesIntro'>> }>; assessmentInformation?: Maybe<{ __typename?: 'AssessmentInformation' } & Pick<AssessmentInformation, 'constraints' | 'proceduresAfterTheAssessment'> & { assessmentScope?: Maybe<{ __typename?: 'AssessmentScope' } & Pick<AssessmentScope, 'executionPeriod' | 'assetNames' | 'assetsDescription' | 'assetAddresses'>> }>; summaryOfAssessmentResults?: Maybe<{ __typename?: 'SummaryOfAssessmentResults' } & {
      staticInformation?: Maybe<{ __typename?: 'StaticInformation' } & Pick<StaticInformation, 'intro' | 'cvss3'> & { cvss3Metrics?: Maybe<{ __typename?: 'Cvss3Metrics' } & { availability?: Maybe<{ __typename?: 'Availability' } & Pick<Availability, 'intro' | 'high' | 'none' | 'low'>>; integrity?: Maybe<{ __typename?: 'Integrity' } & Pick<Integrity, 'intro' | 'high' | 'low' | 'none'>>; confidentiality?: Maybe<{ __typename?: 'Confidentiality' } & Pick<Confidentiality, 'intro' | 'high' | 'low' | 'none'>>; scope?: Maybe<{ __typename?: 'Scope' } & Pick<Scope, 'intro' | 'changed' | 'unchanged'>>; userInteraction?: Maybe<{ __typename?: 'UserInteraction' } & Pick<UserInteraction, 'intro' | 'none' | 'required'>>; privilegesRequired?: Maybe<{ __typename?: 'PrivilegesRequired' } & Pick<PrivilegesRequired, 'intro' | 'none' | 'high' | 'low'>>; attackComplexity?: Maybe<{ __typename?: 'AttackComplexity' } & Pick<AttackComplexity, 'intro' | 'high' | 'low'>>; attackVector?: Maybe<{ __typename?: 'AttackVector' } & Pick<AttackVector, 'intro' | 'network' | 'adjacent' | 'local' | 'physical'>> }> }>; minorSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentSummarized' } & Pick<AssessmentSummarized, 'empty' | 'notEmpty'> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: 'SummarizedIssue' } & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>>>> }>
    }>; assessmentDetails?: Maybe<{ __typename?: 'AssessmentDetails' } & Pick<AssessmentDetails, 'intro'> & {
      minorSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: 'AssessmentDetailed' } & Pick<AssessmentDetailed, 'empty'> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: 'DetailedIssue' } & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>>>> }>
    }>; appendix?: Maybe<{ __typename?: 'Appendix' } & Pick<Appendix, 'tools' | 'evidences'>>
  };

  currentProj2: Maybe<{ __typename?: 'Project' } & Pick<Project, 'id' | 'name' | 'status'> & { relatorios?: Maybe<Array<{ __typename?: 'Relatorio' } & Pick<Relatorio, 'id' | 'name' | 'status' | 'revDeadline' | 'delDeadline' | 'complexRelatorioId'>>>; auditor?: Maybe<Array<{ __typename?: 'Auditor' } & Pick<Auditor, 'id' | 'name' | 'email' | 'role'>>>; reviewer?: Maybe<Array<{ __typename?: 'Reviewer' } & Pick<Reviewer, 'id' | 'name' | 'email' | 'role'>>>; projectManager?: Maybe<Array<{ __typename?: 'ProjectManager' } & Pick<ProjectManager, 'id' | 'name' | 'email' | 'role'>>>; client?: Maybe<Array<{ __typename?: 'Client' } & Pick<Client, 'id' | 'name' | 'email'>>> }>;

  form: FormGroup = new FormGroup({
    companyLogo: new FormControl('', Validators.required),
    reportTitle: new FormControl(''),
    targetCompany: new FormControl(''/*, Validators.email*/),
    classification: new FormControl(0/*, [ Validators.required, Validators.minLength(8) ]*/),
    version: new FormControl(''),
    remarks: new FormControl(''),
    date: new FormControl(''),
  });


  constructor(
    private fillCoverGQL: FillCoverGQL,
    private datePipe: DatePipe,
    private fetchComplexRelatorioGQL: FetchComplexRelatorioGQL,
    private fetchProjectGQL: FetchProjectGQL,
    private addComplexIssueGQL: AddComplexIssueGQL,
    private removeComplexIssueGQL: RemoveComplexIssueGQL
  ) {
    this.fetchComplexRelatorioGQL.watch({id: this.relId}).valueChanges.subscribe(result => {
      console.log(result.data.fetchComplexRelatorio.projId);
      this.fetchProjectGQL.watch({id: result.data.fetchComplexRelatorio.projId}).valueChanges.subscribe(projResult => {
        this.currentProj2 = projResult.data.fetchProject;
      });
      this.complexrelatorio2 = result.data.fetchComplexRelatorio;
    });
  }

  emptyFormGroup() {
    this.form.setValue({
      companyLogo: '',
      reportTitle: '',
      targetCompany: '',
      classification: '',
      version: '',
      remarks: '',
      date: ''
    });
  }

  initializeFormGroup(rel) {
    this.form.setValue({
      companyLogo: rel.cover.companyLogo,
      reportTitle: rel.cover.reportTitle,
      targetCompany: rel.cover.targetCompany,
      classification: rel.cover.classification,
      version: rel.cover.version,
      remarks: rel.cover.remarks,
      date: rel.cover.date
    });
  }

  fillCover(rel) {
    this.fillCoverGQL.mutate({
      id: this.relId,
      companyLogo: rel.companyLogo,
      reportTitle: rel.reportTitle,
      targetCompany: rel.targetCompany,
      classification: rel.classification,
      version: rel.version,
      remarks: rel.remarks,
      date: rel.date === '' ? '' : this.datePipe.transform(rel.date, 'MMMM d, y')
    }).subscribe(result => {
      console.log(result.data.fillCover.cover.date);
    });
  }

  addComplexIssue(id, findingId, severity) {
    console.log(id + ' ' + findingId + ' ' + severity);
    this.addComplexIssueGQL.mutate({
      id,
      findingId,
      severity
    }).subscribe(() => {
    });
  }

  removeComplexIssue(id, issueId) {
    this.removeComplexIssueGQL.mutate({
      id,
      issueId
    }).subscribe(() => {
    });
  }
}
