import { Component, OnInit } from '@angular/core';
import {EditorComponent} from '../editor.component';
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
  Cover, DetailedIssue,
  DocumentManagement,
  DocumentStructure,
  ExecutiveSummary,
  Integrity,
  Introduction,
  Maybe,
  OrganizationalAndTechnicalContacts,
  PrivilegesRequired,
  Scope,
  StaticInformation,
  SummarizedIssue,
  UserInteraction
} from "../../../generated/graphql";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  complexRelatorio: { __typename?: "ComplexRelatorio" } & Pick<ComplexRelatorio, "id"> & {
    cover?: Maybe<{ __typename?: "Cover" } & Pick<Cover, "companyLogo" | "reportTitle" | "targetCompany" | "classification" | "version" | "remarks" | "date">>; executiveSummary?: Maybe<{ __typename?: "ExecutiveSummary" } & Pick<ExecutiveSummary, "summary" | "recommendations">>; introduction?: Maybe<{ __typename?: "Introduction" } & Pick<Introduction, "documentInformation" | "responsibilityStatement" | "classification" | "documentOwner" | "disclaimer"> & { authorsAndReviewers?: Maybe<{ __typename?: "AuthorsAndReviewers" } & Pick<AuthorsAndReviewers, "approvers" | "reviewers" | "authors">>; documentManagement?: Maybe<Array<Maybe<{ __typename?: "DocumentManagement" } & Pick<DocumentManagement, "version" | "date" | "editor" | "remarks">>>>; documentStructure?: Maybe<{ __typename?: "DocumentStructure" } & Pick<DocumentStructure, "sectionsIntro" | "sections" | "appendicesIntro" | "appendices">> }>; assessmentInformation?: Maybe<{ __typename?: "AssessmentInformation" } & Pick<AssessmentInformation, "constraints" | "proceduresAfterTheAssessment"> & { assessmentScope?: Maybe<{ __typename?: "AssessmentScope" } & Pick<AssessmentScope, "executionPeriod" | "assetNames" | "assetsDescription" | "assetAddresses">>; organizationalAndTechnicalContacts?: Maybe<Array<Maybe<{ __typename?: "OrganizationalAndTechnicalContacts" } & Pick<OrganizationalAndTechnicalContacts, "role" | "name" | "contact">>>> }>; summaryOfAssessmentResults?: Maybe<{ __typename?: "SummaryOfAssessmentResults" } & {
      staticInformation?: Maybe<{ __typename?: "StaticInformation" } & Pick<StaticInformation, "intro" | "critical" | "high" | "moderate" | "low" | "minor" | "cvss3"> & { cvss3Metrics?: Maybe<{ __typename?: "Cvss3Metrics" } & { availability?: Maybe<{ __typename?: "Availability" } & Pick<Availability, "intro" | "high" | "none" | "low">>; integrity?: Maybe<{ __typename?: "Integrity" } & Pick<Integrity, "intro" | "high" | "low" | "none">>; confidentiality?: Maybe<{ __typename?: "Confidentiality" } & Pick<Confidentiality, "intro" | "high" | "low" | "none">>; scope?: Maybe<{ __typename?: "Scope" } & Pick<Scope, "intro" | "changed" | "unchanged">>; userInteraction?: Maybe<{ __typename?: "UserInteraction" } & Pick<UserInteraction, "intro" | "none" | "required">>; privilegesRequired?: Maybe<{ __typename?: "PrivilegesRequired" } & Pick<PrivilegesRequired, "intro" | "none" | "high" | "low">>; attackComplexity?: Maybe<{ __typename?: "AttackComplexity" } & Pick<AttackComplexity, "intro" | "high" | "low">>; attackVector?: Maybe<{ __typename?: "AttackVector" } & Pick<AttackVector, "intro" | "network" | "adjacent" | "local" | "physical">> }> }>; minorSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentSummarized" } & Pick<AssessmentSummarized, "empty" | "notEmpty"> & { summarizedIssues?: Maybe<Array<Maybe<{ __typename?: "SummarizedIssue" } & Pick<SummarizedIssue, "vulnerability" | "description" | "details">>>> }>
    }>; assessmentDetails?: Maybe<{ __typename?: "AssessmentDetails" } & Pick<AssessmentDetails, "intro"> & {
      minorSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>; lowSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>; moderateSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>; criticalSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>; highSeverityVulnerabilities?: Maybe<{ __typename?: "AssessmentDetailed" } & Pick<AssessmentDetailed, "empty"> & { detailedIssues?: Maybe<Array<Maybe<{ __typename?: "DetailedIssue" } & Pick<DetailedIssue, "title" | "description" | "impact" | "remediation" | "cvssVector" | "otherReferences" | "technicalDetails" | "currentStatus">>>> }>
    }>; appendix?: Maybe<{ __typename?: "Appendix" } & Pick<Appendix, "tools" | "evidences">>
  }

  constructor(private editorComponent: EditorComponent) { }

  ngOnInit(): void {
    this.complexRelatorio = this.editorComponent.complexRelatorio;
  }

}
