import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Appendix = {
   __typename?: 'Appendix';
  tools?: Maybe<Array<Maybe<Scalars['String']>>>;
  evidences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssessmentDetailed = {
   __typename?: 'AssessmentDetailed';
  empty?: Maybe<Scalars['String']>;
  detailedIssues?: Maybe<Array<Maybe<DetailedIssue>>>;
};

export type AssessmentDetails = {
   __typename?: 'AssessmentDetails';
  intro?: Maybe<Array<Maybe<Scalars['String']>>>;
  minorSeverityVulnerabilities?: Maybe<AssessmentDetailed>;
  lowSeverityVulnerabilities?: Maybe<AssessmentDetailed>;
  moderateSeverityVulnerabilities?: Maybe<AssessmentDetailed>;
  highSeverityVulnerabilities?: Maybe<AssessmentDetailed>;
  criticalSeverityVulnerabilities?: Maybe<AssessmentDetailed>;
};

export type AssessmentInformation = {
   __typename?: 'AssessmentInformation';
  assessmentScope?: Maybe<AssessmentScope>;
  organizationalAndTechnicalContacts?: Maybe<Array<Maybe<OrganizationalAndTechnicalContacts>>>;
  constraints?: Maybe<Scalars['String']>;
  proceduresAfterTheAssessment?: Maybe<Scalars['String']>;
};

export type AssessmentScope = {
   __typename?: 'AssessmentScope';
  executionPeriod?: Maybe<Scalars['String']>;
  assetNames?: Maybe<Scalars['String']>;
  assetsDescription?: Maybe<Scalars['String']>;
  assetAddresses?: Maybe<Scalars['String']>;
};

export type AssessmentSummarized = {
   __typename?: 'AssessmentSummarized';
  empty?: Maybe<Scalars['String']>;
  notEmpty?: Maybe<Scalars['String']>;
  summarizedIssues?: Maybe<Array<Maybe<SummarizedIssue>>>;
};

export type AttackComplexity = {
   __typename?: 'AttackComplexity';
  intro?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['String']>;
};

export type AttackVector = {
   __typename?: 'AttackVector';
  intro?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  adjacent?: Maybe<Scalars['String']>;
  local?: Maybe<Scalars['String']>;
  physical?: Maybe<Scalars['String']>;
};

export type Auditor = {
   __typename?: 'Auditor';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: AuditorRole;
};

export enum AuditorRole {
  Auditor = 'AUDITOR'
}

export type AuthorsAndReviewers = {
   __typename?: 'AuthorsAndReviewers';
  approvers?: Maybe<Array<Maybe<Scalars['String']>>>;
  reviewers?: Maybe<Array<Maybe<Scalars['String']>>>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Availability = {
   __typename?: 'Availability';
  intro?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['String']>;
  none?: Maybe<Scalars['String']>;
};

export type Client = {
   __typename?: 'Client';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type ComplexRelatorio = {
   __typename?: 'ComplexRelatorio';
  id: Scalars['ID'];
  cover?: Maybe<Cover>;
  executiveSummary?: Maybe<ExecutiveSummary>;
  introduction?: Maybe<Introduction>;
  assessmentInformation?: Maybe<AssessmentInformation>;
  summaryOfAssessmentResults?: Maybe<SummaryOfAssessmentResults>;
  assessmentDetails?: Maybe<AssessmentDetails>;
  appendix?: Maybe<Appendix>;
};

export type Confidentiality = {
   __typename?: 'Confidentiality';
  intro?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['String']>;
  none?: Maybe<Scalars['String']>;
};

export type Cover = {
   __typename?: 'Cover';
  companyLogo?: Maybe<Scalars['String']>;
  reportTitle?: Maybe<Scalars['String']>;
  targetCompany?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type Cvss3Metrics = {
   __typename?: 'Cvss3Metrics';
  availability?: Maybe<Availability>;
  integrity?: Maybe<Integrity>;
  confidentiality?: Maybe<Confidentiality>;
  scope?: Maybe<Scope>;
  userInteraction?: Maybe<UserInteraction>;
  privilegesRequired?: Maybe<PrivilegesRequired>;
  attackComplexity?: Maybe<AttackComplexity>;
  attackVector?: Maybe<AttackVector>;
};

export type DetailedIssue = {
   __typename?: 'DetailedIssue';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['String']>;
  remediation?: Maybe<Scalars['String']>;
  cvssVector?: Maybe<Scalars['String']>;
  otherReferences?: Maybe<Scalars['String']>;
  technicalDetails?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
};

export type DocumentManagement = {
   __typename?: 'DocumentManagement';
  version?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  editor?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
};

export type DocumentStructure = {
   __typename?: 'DocumentStructure';
  sectionsIntro?: Maybe<Scalars['String']>;
  appendicesIntro?: Maybe<Scalars['String']>;
  appendices?: Maybe<Array<Maybe<Scalars['String']>>>;
  sections?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ExecutiveSummary = {
   __typename?: 'ExecutiveSummary';
  summary?: Maybe<Scalars['String']>;
  recommendations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Finding = {
   __typename?: 'Finding';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  impact: Scalars['String'];
  remediation?: Maybe<Scalars['String']>;
  cvssVector?: Maybe<Scalars['String']>;
  severity?: Maybe<Scalars['String']>;
  otherReferences?: Maybe<Scalars['String']>;
};

export type Integrity = {
   __typename?: 'Integrity';
  intro?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['String']>;
  none?: Maybe<Scalars['String']>;
};

export type Introduction = {
   __typename?: 'Introduction';
  documentInformation?: Maybe<Scalars['String']>;
  responsibilityStatement?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  documentOwner?: Maybe<Scalars['String']>;
  authorsAndReviewers?: Maybe<AuthorsAndReviewers>;
  documentManagement?: Maybe<Array<Maybe<DocumentManagement>>>;
  documentStructure?: Maybe<DocumentStructure>;
  disclaimer?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']>;
  createUser: User;
  addUserToProject: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  updateUser: User;
  createFinding: Scalars['Boolean'];
  deleteAllFindings: Scalars['Boolean'];
  addClientToProject: Scalars['Boolean'];
  createClient: Client;
  deleteClient: Scalars['Boolean'];
  updateClient: Client;
  newProject: Project;
  updateProject: Project;
  deleteProject: Scalars['Boolean'];
  addUser: Scalars['Boolean'];
  addRelatorioToProject: Scalars['Boolean'];
  deleteRelatorio: Scalars['Boolean'];
  removeRelatorioFromProject: Scalars['Boolean'];
  addAuditorToProject: Scalars['Boolean'];
  removeAuditorFromProject: Scalars['Boolean'];
  addReviewerToProject: Scalars['Boolean'];
  removeReviewerFromProject: Scalars['Boolean'];
  addProjectManagerToProject: Scalars['Boolean'];
  removeProjectManagerFromProject: Scalars['Boolean'];
  createComplexRelatorio: ComplexRelatorio;
  updateExecutiveSummary: ComplexRelatorio;
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
};


export type MutationAddUserToProjectArgs = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateFindingArgs = {
  title: Scalars['String'];
  description: Scalars['String'];
  impact: Scalars['String'];
  remediation?: Maybe<Scalars['String']>;
  cvssVector?: Maybe<Scalars['String']>;
  severity?: Maybe<Scalars['String']>;
  otherReferences?: Maybe<Scalars['String']>;
};


export type MutationDeleteAllFindingsArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationAddClientToProjectArgs = {
  clientId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationCreateClientArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
};


export type MutationDeleteClientArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateClientArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};


export type MutationNewProjectArgs = {
  name: Scalars['String'];
  status: Scalars['String'];
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationAddUserArgs = {
  name: Scalars['String'];
};


export type MutationAddRelatorioToProjectArgs = {
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  revDeadline?: Maybe<Scalars['String']>;
  delDeadline?: Maybe<Scalars['String']>;
  complexRelatorioId?: Maybe<Scalars['String']>;
  projId: Scalars['ID'];
};


export type MutationDeleteRelatorioArgs = {
  name: Scalars['String'];
};


export type MutationRemoveRelatorioFromProjectArgs = {
  relatorioId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationAddAuditorToProjectArgs = {
  userIds?: Maybe<Array<Scalars['ID']>>;
  projId: Scalars['ID'];
};


export type MutationRemoveAuditorFromProjectArgs = {
  auditorId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationAddReviewerToProjectArgs = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationRemoveReviewerFromProjectArgs = {
  reviewerId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationAddProjectManagerToProjectArgs = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationRemoveProjectManagerFromProjectArgs = {
  projectManagerId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationCreateComplexRelatorioArgs = {
  companyLogo?: Maybe<Scalars['String']>;
  reportTitle?: Maybe<Scalars['String']>;
  targetCompany?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};


export type MutationUpdateExecutiveSummaryArgs = {
  relId: Scalars['ID'];
  summary?: Maybe<Scalars['String']>;
  recommendations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrganizationalAndTechnicalContacts = {
   __typename?: 'OrganizationalAndTechnicalContacts';
  role?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
};

export type PrivilegesRequired = {
   __typename?: 'PrivilegesRequired';
  intro?: Maybe<Scalars['String']>;
  none?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['String']>;
};

export type Project = {
   __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: ProjectStatus;
  relatorios?: Maybe<Array<Relatorio>>;
  auditor?: Maybe<Array<Auditor>>;
  reviewer?: Maybe<Array<Reviewer>>;
  projectManager?: Maybe<Array<ProjectManager>>;
  client?: Maybe<Array<Client>>;
};

export type ProjectManager = {
   __typename?: 'ProjectManager';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: ProjectManagerRole;
};

export enum ProjectManagerRole {
  Pm = 'PM'
}

export enum ProjectStatus {
  Open = 'OPEN',
  Inprogress = 'INPROGRESS',
  Closed = 'CLOSED'
}

export type Query = {
   __typename?: 'Query';
  _empty?: Maybe<Scalars['Boolean']>;
  fetchUsers?: Maybe<Array<User>>;
  fetchUser?: Maybe<User>;
  fetchFindings?: Maybe<Array<Finding>>;
  fetchFinding?: Maybe<Finding>;
  fetchClients?: Maybe<Array<Client>>;
  fetchClient?: Maybe<Client>;
  fetchProjects: Array<Project>;
  fetchProject?: Maybe<Project>;
  getRelatorios: Array<Relatorio>;
  getRelatorio: Relatorio;
  fetchAuditors?: Maybe<Array<User>>;
  fetchAuditor?: Maybe<User>;
  fetchAuditorsFromProject?: Maybe<Array<Auditor>>;
  fetchReviewers?: Maybe<Array<User>>;
  fetchReviewer?: Maybe<User>;
  fetchProjectManagers?: Maybe<Array<User>>;
  fetchProjectManager?: Maybe<User>;
  fetchComplexRelatorios?: Maybe<Array<ComplexRelatorio>>;
  fetchComplexRelatorio: ComplexRelatorio;
};


export type QueryFetchUserArgs = {
  id: Scalars['ID'];
};


export type QueryFetchFindingArgs = {
  id: Scalars['ID'];
};


export type QueryFetchClientArgs = {
  id: Scalars['ID'];
};


export type QueryFetchProjectArgs = {
  id: Scalars['ID'];
};


export type QueryGetRelatorioArgs = {
  id: Scalars['ID'];
};


export type QueryFetchAuditorArgs = {
  id: Scalars['ID'];
};


export type QueryFetchAuditorsFromProjectArgs = {
  id: Scalars['ID'];
};


export type QueryFetchReviewerArgs = {
  id: Scalars['ID'];
};


export type QueryFetchProjectManagerArgs = {
  id: Scalars['ID'];
};


export type QueryFetchComplexRelatorioArgs = {
  id: Scalars['ID'];
};

export type Relatorio = {
   __typename?: 'Relatorio';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: RelatorioStatus;
  revDeadline?: Maybe<Scalars['String']>;
  delDeadline?: Maybe<Scalars['String']>;
  complexRelatorioId?: Maybe<Scalars['String']>;
};

export enum RelatorioStatus {
  Open = 'OPEN',
  Inprogress = 'INPROGRESS',
  Review = 'REVIEW',
  Reviewed = 'REVIEWED',
  Closed = 'CLOSED'
}

export type Reviewer = {
   __typename?: 'Reviewer';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: ReviewerRole;
};

export enum ReviewerRole {
  Reviewer = 'REVIEWER'
}

export type Scope = {
   __typename?: 'Scope';
  intro?: Maybe<Scalars['String']>;
  unchanged?: Maybe<Scalars['String']>;
  changed?: Maybe<Scalars['String']>;
};

export type StaticInformation = {
   __typename?: 'StaticInformation';
  critical?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['String']>;
  moderate?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['String']>;
  minor?: Maybe<Scalars['String']>;
  cvss3?: Maybe<Scalars['String']>;
  cvss3Metrics?: Maybe<Cvss3Metrics>;
  intro?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Subscription = {
   __typename?: 'Subscription';
  _empty?: Maybe<Scalars['Boolean']>;
};

export type SummarizedIssue = {
   __typename?: 'SummarizedIssue';
  vulnerability?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type SummaryOfAssessmentResults = {
   __typename?: 'SummaryOfAssessmentResults';
  staticInformation?: Maybe<StaticInformation>;
  minorSeverityVulnerabilities?: Maybe<AssessmentSummarized>;
  lowSeverityVulnerabilities?: Maybe<AssessmentSummarized>;
  moderateSeverityVulnerabilities?: Maybe<AssessmentSummarized>;
  criticalSeverityVulnerabilities?: Maybe<AssessmentSummarized>;
  highSeverityVulnerabilities?: Maybe<AssessmentSummarized>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type UserInteraction = {
   __typename?: 'UserInteraction';
  intro?: Maybe<Scalars['String']>;
  none?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['String']>;
};

export type AddAuditorToProjectMutationVariables = {
  userIds?: Maybe<Array<Scalars['ID']>>;
  projId: Scalars['ID'];
};


export type AddAuditorToProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addAuditorToProject'>
);

export type AddClientToProjectMutationVariables = {
  clientId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type AddClientToProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addClientToProject'>
);

export type AddProjectManagerToProjectMutationVariables = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type AddProjectManagerToProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addProjectManagerToProject'>
);

export type AddRelatorioToProjectMutationVariables = {
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  revDeadline?: Maybe<Scalars['String']>;
  delDeadline?: Maybe<Scalars['String']>;
  projId: Scalars['ID'];
  complexRelatorioId?: Maybe<Scalars['String']>;
};


export type AddRelatorioToProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addRelatorioToProject'>
);

export type AddReviewerToProjectMutationVariables = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type AddReviewerToProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addReviewerToProject'>
);

export type CreateClientMutationVariables = {
  name: Scalars['String'];
  email: Scalars['String'];
};


export type CreateClientMutation = (
  { __typename?: 'Mutation' }
  & { createClient: (
    { __typename?: 'Client' }
    & Pick<Client, 'name' | 'email'>
  ) }
);

export type CreateComplexRelatorioMutationVariables = {
  companyLogo?: Maybe<Scalars['String']>;
  reportTitle?: Maybe<Scalars['String']>;
  targetCompany?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};


export type CreateComplexRelatorioMutation = (
  { __typename?: 'Mutation' }
  & { createComplexRelatorio: (
    { __typename?: 'ComplexRelatorio' }
    & Pick<ComplexRelatorio, 'id'>
  ) }
);

export type CreateFindingMutationVariables = {
  title: Scalars['String'];
  description: Scalars['String'];
  impact: Scalars['String'];
  remediation?: Maybe<Scalars['String']>;
  cvssVector?: Maybe<Scalars['String']>;
  severity?: Maybe<Scalars['String']>;
  otherReferences?: Maybe<Scalars['String']>;
};


export type CreateFindingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createFinding'>
);

export type CreateUserMutationVariables = {
  name: Scalars['String'];
  email: Scalars['String'];
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
  ) }
);

export type DeleteClientMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteClientMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteClient'>
);

export type DeleteProjectMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProject'>
);

export type DeleteUserMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUser'>
);

export type FetchClientsQueryVariables = {};


export type FetchClientsQuery = (
  { __typename?: 'Query' }
  & { fetchClients?: Maybe<Array<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'email'>
  )>> }
);

export type FetchComplexRelatorioQueryVariables = {
  id: Scalars['ID'];
};


export type FetchComplexRelatorioQuery = (
  { __typename?: 'Query' }
  & { fetchComplexRelatorio: (
    { __typename?: 'ComplexRelatorio' }
    & Pick<ComplexRelatorio, 'id'>
    & { cover?: Maybe<(
      { __typename?: 'Cover' }
      & Pick<Cover, 'companyLogo' | 'reportTitle' | 'targetCompany' | 'classification' | 'version' | 'remarks' | 'date'>
    )>, executiveSummary?: Maybe<(
      { __typename?: 'ExecutiveSummary' }
      & Pick<ExecutiveSummary, 'summary' | 'recommendations'>
    )>, introduction?: Maybe<(
      { __typename?: 'Introduction' }
      & Pick<Introduction, 'documentInformation' | 'responsibilityStatement' | 'classification' | 'documentOwner' | 'disclaimer'>
      & { authorsAndReviewers?: Maybe<(
        { __typename?: 'AuthorsAndReviewers' }
        & Pick<AuthorsAndReviewers, 'approvers' | 'reviewers' | 'authors'>
      )>, documentManagement?: Maybe<Array<Maybe<(
        { __typename?: 'DocumentManagement' }
        & Pick<DocumentManagement, 'version' | 'date' | 'editor' | 'remarks'>
      )>>>, documentStructure?: Maybe<(
        { __typename?: 'DocumentStructure' }
        & Pick<DocumentStructure, 'sectionsIntro' | 'sections' | 'appendicesIntro' | 'appendices'>
      )> }
    )>, assessmentInformation?: Maybe<(
      { __typename?: 'AssessmentInformation' }
      & Pick<AssessmentInformation, 'constraints' | 'proceduresAfterTheAssessment'>
      & { assessmentScope?: Maybe<(
        { __typename?: 'AssessmentScope' }
        & Pick<AssessmentScope, 'executionPeriod' | 'assetNames' | 'assetsDescription' | 'assetAddresses'>
      )>, organizationalAndTechnicalContacts?: Maybe<Array<Maybe<(
        { __typename?: 'OrganizationalAndTechnicalContacts' }
        & Pick<OrganizationalAndTechnicalContacts, 'role' | 'name' | 'contact'>
      )>>> }
    )>, summaryOfAssessmentResults?: Maybe<(
      { __typename?: 'SummaryOfAssessmentResults' }
      & { staticInformation?: Maybe<(
        { __typename?: 'StaticInformation' }
        & Pick<StaticInformation, 'intro' | 'critical' | 'high' | 'moderate' | 'low' | 'minor' | 'cvss3'>
        & { cvss3Metrics?: Maybe<(
          { __typename?: 'Cvss3Metrics' }
          & { availability?: Maybe<(
            { __typename?: 'Availability' }
            & Pick<Availability, 'intro' | 'high' | 'none' | 'low'>
          )>, integrity?: Maybe<(
            { __typename?: 'Integrity' }
            & Pick<Integrity, 'intro' | 'high' | 'low' | 'none'>
          )>, confidentiality?: Maybe<(
            { __typename?: 'Confidentiality' }
            & Pick<Confidentiality, 'intro' | 'high' | 'low' | 'none'>
          )>, scope?: Maybe<(
            { __typename?: 'Scope' }
            & Pick<Scope, 'intro' | 'changed' | 'unchanged'>
          )>, userInteraction?: Maybe<(
            { __typename?: 'UserInteraction' }
            & Pick<UserInteraction, 'intro' | 'none' | 'required'>
          )>, privilegesRequired?: Maybe<(
            { __typename?: 'PrivilegesRequired' }
            & Pick<PrivilegesRequired, 'intro' | 'none' | 'high' | 'low'>
          )>, attackComplexity?: Maybe<(
            { __typename?: 'AttackComplexity' }
            & Pick<AttackComplexity, 'intro' | 'high' | 'low'>
          )>, attackVector?: Maybe<(
            { __typename?: 'AttackVector' }
            & Pick<AttackVector, 'intro' | 'network' | 'adjacent' | 'local' | 'physical'>
          )> }
        )> }
      )>, minorSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'empty' | 'notEmpty'>
        & { summarizedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'SummarizedIssue' }
          & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>
        )>>> }
      )>, lowSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'empty' | 'notEmpty'>
        & { summarizedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'SummarizedIssue' }
          & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>
        )>>> }
      )>, moderateSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'empty' | 'notEmpty'>
        & { summarizedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'SummarizedIssue' }
          & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>
        )>>> }
      )>, criticalSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'empty' | 'notEmpty'>
        & { summarizedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'SummarizedIssue' }
          & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>
        )>>> }
      )>, highSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'empty' | 'notEmpty'>
        & { summarizedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'SummarizedIssue' }
          & Pick<SummarizedIssue, 'vulnerability' | 'description' | 'details'>
        )>>> }
      )> }
    )>, assessmentDetails?: Maybe<(
      { __typename?: 'AssessmentDetails' }
      & Pick<AssessmentDetails, 'intro'>
      & { minorSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'empty'>
        & { detailedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'DetailedIssue' }
          & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
        )>>> }
      )>, lowSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'empty'>
        & { detailedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'DetailedIssue' }
          & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
        )>>> }
      )>, moderateSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'empty'>
        & { detailedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'DetailedIssue' }
          & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
        )>>> }
      )>, criticalSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'empty'>
        & { detailedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'DetailedIssue' }
          & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
        )>>> }
      )>, highSeverityVulnerabilities?: Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'empty'>
        & { detailedIssues?: Maybe<Array<Maybe<(
          { __typename?: 'DetailedIssue' }
          & Pick<DetailedIssue, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
        )>>> }
      )> }
    )>, appendix?: Maybe<(
      { __typename?: 'Appendix' }
      & Pick<Appendix, 'tools' | 'evidences'>
    )> }
  ) }
);

export type FetchFindingsQueryVariables = {};


export type FetchFindingsQuery = (
  { __typename?: 'Query' }
  & { fetchFindings?: Maybe<Array<(
    { __typename?: 'Finding' }
    & Pick<Finding, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'severity' | 'otherReferences'>
  )>> }
);

export type FetchProjectsQueryVariables = {};


export type FetchProjectsQuery = (
  { __typename?: 'Query' }
  & { fetchProjects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'status'>
    & { relatorios?: Maybe<Array<(
      { __typename?: 'Relatorio' }
      & Pick<Relatorio, 'id' | 'name' | 'status' | 'revDeadline' | 'delDeadline' | 'complexRelatorioId'>
    )>>, auditor?: Maybe<Array<(
      { __typename?: 'Auditor' }
      & Pick<Auditor, 'id' | 'name' | 'email' | 'role'>
    )>>, reviewer?: Maybe<Array<(
      { __typename?: 'Reviewer' }
      & Pick<Reviewer, 'id' | 'name' | 'email' | 'role'>
    )>>, projectManager?: Maybe<Array<(
      { __typename?: 'ProjectManager' }
      & Pick<ProjectManager, 'id' | 'name' | 'email' | 'role'>
    )>>, client?: Maybe<Array<(
      { __typename?: 'Client' }
      & Pick<Client, 'id' | 'name' | 'email'>
    )>> }
  )> }
);

export type FetchUsersQueryVariables = {};


export type FetchUsersQuery = (
  { __typename?: 'Query' }
  & { fetchUsers?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>> }
);

export type NewProjectMutationVariables = {
  name: Scalars['String'];
  status: Scalars['String'];
};


export type NewProjectMutation = (
  { __typename?: 'Mutation' }
  & { newProject: (
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'status'>
  ) }
);

export type RemoveAuditorFromProjectMutationVariables = {
  auditorId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type RemoveAuditorFromProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeAuditorFromProject'>
);

export type RemoveProjectManagerFromProjectMutationVariables = {
  projectManagerId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type RemoveProjectManagerFromProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeProjectManagerFromProject'>
);

export type RemoveRelatorioFromProjectMutationVariables = {
  relatorioId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type RemoveRelatorioFromProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeRelatorioFromProject'>
);

export type RemoveReviewerFromProjectMutationVariables = {
  reviewerId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type RemoveReviewerFromProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeReviewerFromProject'>
);

export type UpdateClientMutationVariables = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};


export type UpdateClientMutation = (
  { __typename?: 'Mutation' }
  & { updateClient: (
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'email'>
  ) }
);

export type UpdateUserMutationVariables = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  ) }
);

export const AddAuditorToProjectDocument = gql`
    mutation addAuditorToProject($userIds: [ID!], $projId: ID!) {
  addAuditorToProject(userIds: $userIds, projId: $projId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddAuditorToProjectGQL extends Apollo.Mutation<AddAuditorToProjectMutation, AddAuditorToProjectMutationVariables> {
    document = AddAuditorToProjectDocument;
    
  }
export const AddClientToProjectDocument = gql`
    mutation addClientToProject($clientId: ID!, $projId: ID!) {
  addClientToProject(clientId: $clientId, projId: $projId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddClientToProjectGQL extends Apollo.Mutation<AddClientToProjectMutation, AddClientToProjectMutationVariables> {
    document = AddClientToProjectDocument;
    
  }
export const AddProjectManagerToProjectDocument = gql`
    mutation addProjectManagerToProject($userId: ID!, $projId: ID!) {
  addProjectManagerToProject(userId: $userId, projId: $projId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddProjectManagerToProjectGQL extends Apollo.Mutation<AddProjectManagerToProjectMutation, AddProjectManagerToProjectMutationVariables> {
    document = AddProjectManagerToProjectDocument;
    
  }
export const AddRelatorioToProjectDocument = gql`
    mutation addRelatorioToProject($name: String!, $status: String, $revDeadline: String, $delDeadline: String, $projId: ID!, $complexRelatorioId: String) {
  addRelatorioToProject(name: $name, status: $status, revDeadline: $revDeadline, delDeadline: $delDeadline, projId: $projId, complexRelatorioId: $complexRelatorioId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddRelatorioToProjectGQL extends Apollo.Mutation<AddRelatorioToProjectMutation, AddRelatorioToProjectMutationVariables> {
    document = AddRelatorioToProjectDocument;
    
  }
export const AddReviewerToProjectDocument = gql`
    mutation addReviewerToProject($userId: ID!, $projId: ID!) {
  addReviewerToProject(userId: $userId, projId: $projId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddReviewerToProjectGQL extends Apollo.Mutation<AddReviewerToProjectMutation, AddReviewerToProjectMutationVariables> {
    document = AddReviewerToProjectDocument;
    
  }
export const CreateClientDocument = gql`
    mutation createClient($name: String!, $email: String!) {
  createClient(name: $name, email: $email) {
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateClientGQL extends Apollo.Mutation<CreateClientMutation, CreateClientMutationVariables> {
    document = CreateClientDocument;
    
  }
export const CreateComplexRelatorioDocument = gql`
    mutation createComplexRelatorio($companyLogo: String, $reportTitle: String, $targetCompany: String, $classification: String, $version: String, $remarks: String, $date: String) {
  createComplexRelatorio(companyLogo: $companyLogo, reportTitle: $reportTitle, targetCompany: $targetCompany, classification: $classification, version: $version, remarks: $remarks, date: $date) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateComplexRelatorioGQL extends Apollo.Mutation<CreateComplexRelatorioMutation, CreateComplexRelatorioMutationVariables> {
    document = CreateComplexRelatorioDocument;
    
  }
export const CreateFindingDocument = gql`
    mutation createFinding($title: String!, $description: String!, $impact: String!, $remediation: String, $cvssVector: String, $severity: String, $otherReferences: String) {
  createFinding(title: $title, description: $description, impact: $impact, remediation: $remediation, cvssVector: $cvssVector, severity: $severity, otherReferences: $otherReferences)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateFindingGQL extends Apollo.Mutation<CreateFindingMutation, CreateFindingMutationVariables> {
    document = CreateFindingDocument;
    
  }
export const CreateUserDocument = gql`
    mutation createUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
  }
export const DeleteClientDocument = gql`
    mutation deleteClient($id: ID!) {
  deleteClient(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteClientGQL extends Apollo.Mutation<DeleteClientMutation, DeleteClientMutationVariables> {
    document = DeleteClientDocument;
    
  }
export const DeleteProjectDocument = gql`
    mutation deleteProject($id: ID!) {
  deleteProject(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteProjectGQL extends Apollo.Mutation<DeleteProjectMutation, DeleteProjectMutationVariables> {
    document = DeleteProjectDocument;
    
  }
export const DeleteUserDocument = gql`
    mutation deleteUser($id: ID!) {
  deleteUser(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUserGQL extends Apollo.Mutation<DeleteUserMutation, DeleteUserMutationVariables> {
    document = DeleteUserDocument;
    
  }
export const FetchClientsDocument = gql`
    query fetchClients {
  fetchClients {
    id
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchClientsGQL extends Apollo.Query<FetchClientsQuery, FetchClientsQueryVariables> {
    document = FetchClientsDocument;
    
  }
export const FetchComplexRelatorioDocument = gql`
    query fetchComplexRelatorio($id: ID!) {
  fetchComplexRelatorio(id: $id) {
    id
    cover {
      companyLogo
      reportTitle
      targetCompany
      classification
      version
      remarks
      date
    }
    executiveSummary {
      summary
      recommendations
    }
    introduction {
      documentInformation
      responsibilityStatement
      classification
      documentOwner
      authorsAndReviewers {
        approvers
        reviewers
        authors
      }
      documentManagement {
        version
        date
        editor
        remarks
      }
      documentStructure {
        sectionsIntro
        sections
        appendicesIntro
        appendices
      }
      disclaimer
    }
    assessmentInformation {
      assessmentScope {
        executionPeriod
        assetNames
        assetsDescription
        assetAddresses
      }
      organizationalAndTechnicalContacts {
        role
        name
        contact
      }
      constraints
      proceduresAfterTheAssessment
    }
    summaryOfAssessmentResults {
      staticInformation {
        intro
        critical
        high
        moderate
        low
        minor
        cvss3
        cvss3Metrics {
          availability {
            intro
            high
            none
            low
          }
          integrity {
            intro
            high
            low
            none
          }
          confidentiality {
            intro
            high
            low
            none
          }
          scope {
            intro
            changed
            unchanged
          }
          userInteraction {
            intro
            none
            required
          }
          privilegesRequired {
            intro
            none
            high
            low
          }
          attackComplexity {
            intro
            high
            low
          }
          attackVector {
            intro
            network
            adjacent
            local
            physical
          }
        }
      }
      minorSeverityVulnerabilities {
        empty
        notEmpty
        summarizedIssues {
          vulnerability
          description
          details
        }
      }
      lowSeverityVulnerabilities {
        empty
        notEmpty
        summarizedIssues {
          vulnerability
          description
          details
        }
      }
      moderateSeverityVulnerabilities {
        empty
        notEmpty
        summarizedIssues {
          vulnerability
          description
          details
        }
      }
      criticalSeverityVulnerabilities {
        empty
        notEmpty
        summarizedIssues {
          vulnerability
          description
          details
        }
      }
      highSeverityVulnerabilities {
        empty
        notEmpty
        summarizedIssues {
          vulnerability
          description
          details
        }
      }
    }
    assessmentDetails {
      intro
      minorSeverityVulnerabilities {
        empty
        detailedIssues {
          title
          description
          impact
          remediation
          cvssVector
          otherReferences
          technicalDetails
          currentStatus
        }
      }
      lowSeverityVulnerabilities {
        empty
        detailedIssues {
          title
          description
          impact
          remediation
          cvssVector
          otherReferences
          technicalDetails
          currentStatus
        }
      }
      moderateSeverityVulnerabilities {
        empty
        detailedIssues {
          title
          description
          impact
          remediation
          cvssVector
          otherReferences
          technicalDetails
          currentStatus
        }
      }
      criticalSeverityVulnerabilities {
        empty
        detailedIssues {
          title
          description
          impact
          remediation
          cvssVector
          otherReferences
          technicalDetails
          currentStatus
        }
      }
      highSeverityVulnerabilities {
        empty
        detailedIssues {
          title
          description
          impact
          remediation
          cvssVector
          otherReferences
          technicalDetails
          currentStatus
        }
      }
    }
    appendix {
      tools
      evidences
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchComplexRelatorioGQL extends Apollo.Query<FetchComplexRelatorioQuery, FetchComplexRelatorioQueryVariables> {
    document = FetchComplexRelatorioDocument;
    
  }
export const FetchFindingsDocument = gql`
    query fetchFindings {
  fetchFindings {
    title
    description
    impact
    remediation
    cvssVector
    severity
    otherReferences
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchFindingsGQL extends Apollo.Query<FetchFindingsQuery, FetchFindingsQueryVariables> {
    document = FetchFindingsDocument;
    
  }
export const FetchProjectsDocument = gql`
    query fetchProjects {
  fetchProjects {
    id
    name
    status
    relatorios {
      id
      name
      status
      revDeadline
      delDeadline
      complexRelatorioId
    }
    auditor {
      id
      name
      email
      role
    }
    reviewer {
      id
      name
      email
      role
    }
    projectManager {
      id
      name
      email
      role
    }
    client {
      id
      name
      email
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchProjectsGQL extends Apollo.Query<FetchProjectsQuery, FetchProjectsQueryVariables> {
    document = FetchProjectsDocument;
    
  }
export const FetchUsersDocument = gql`
    query fetchUsers {
  fetchUsers {
    id
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchUsersGQL extends Apollo.Query<FetchUsersQuery, FetchUsersQueryVariables> {
    document = FetchUsersDocument;
    
  }
export const NewProjectDocument = gql`
    mutation newProject($name: String!, $status: String!) {
  newProject(name: $name, status: $status) {
    id
    name
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewProjectGQL extends Apollo.Mutation<NewProjectMutation, NewProjectMutationVariables> {
    document = NewProjectDocument;
    
  }
export const RemoveAuditorFromProjectDocument = gql`
    mutation removeAuditorFromProject($auditorId: ID!, $projId: ID!) {
  removeAuditorFromProject(auditorId: $auditorId, projId: $projId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveAuditorFromProjectGQL extends Apollo.Mutation<RemoveAuditorFromProjectMutation, RemoveAuditorFromProjectMutationVariables> {
    document = RemoveAuditorFromProjectDocument;
    
  }
export const RemoveProjectManagerFromProjectDocument = gql`
    mutation removeProjectManagerFromProject($projectManagerId: ID!, $projId: ID!) {
  removeProjectManagerFromProject(projectManagerId: $projectManagerId, projId: $projId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveProjectManagerFromProjectGQL extends Apollo.Mutation<RemoveProjectManagerFromProjectMutation, RemoveProjectManagerFromProjectMutationVariables> {
    document = RemoveProjectManagerFromProjectDocument;
    
  }
export const RemoveRelatorioFromProjectDocument = gql`
    mutation removeRelatorioFromProject($relatorioId: ID!, $projId: ID!) {
  removeRelatorioFromProject(relatorioId: $relatorioId, projId: $projId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveRelatorioFromProjectGQL extends Apollo.Mutation<RemoveRelatorioFromProjectMutation, RemoveRelatorioFromProjectMutationVariables> {
    document = RemoveRelatorioFromProjectDocument;
    
  }
export const RemoveReviewerFromProjectDocument = gql`
    mutation removeReviewerFromProject($reviewerId: ID!, $projId: ID!) {
  removeReviewerFromProject(reviewerId: $reviewerId, projId: $projId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveReviewerFromProjectGQL extends Apollo.Mutation<RemoveReviewerFromProjectMutation, RemoveReviewerFromProjectMutationVariables> {
    document = RemoveReviewerFromProjectDocument;
    
  }
export const UpdateClientDocument = gql`
    mutation updateClient($id: ID!, $name: String!, $email: String!) {
  updateClient(id: $id, name: $name, email: $email) {
    id
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateClientGQL extends Apollo.Mutation<UpdateClientMutation, UpdateClientMutationVariables> {
    document = UpdateClientDocument;
    
  }
export const UpdateUserDocument = gql`
    mutation updateUser($id: ID!, $name: String!, $email: String!) {
  updateUser(id: $id, name: $name, email: $email) {
    id
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
  }