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
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['String']>;
  remediation?: Maybe<Scalars['String']>;
  cvssVector?: Maybe<Scalars['String']>;
  otherReferences?: Maybe<Scalars['String']>;
  technicalDetails?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Scalars['String']>;
};

export type AssessmentDetails = {
   __typename?: 'AssessmentDetails';
  staticInformation?: Maybe<Scalars['String']>;
  minorSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentDetailed>>>;
  lowSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentDetailed>>>;
  moderateSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentDetailed>>>;
  highSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentDetailed>>>;
  criticalSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentDetailed>>>;
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
  vulnerability?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
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

export type Client = {
   __typename?: 'Client';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type ComplexRelatorio = {
   __typename?: 'ComplexRelatorio';
  id: Scalars['ID'];
  companyLogo?: Maybe<Scalars['String']>;
  reportTitle?: Maybe<Scalars['String']>;
  targetCompany?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  executiveSummary?: Maybe<ExecutiveSummary>;
  introduction?: Maybe<Introduction>;
  assessmentInformation?: Maybe<AssessmentInformation>;
  summaryOfAssessmentResults?: Maybe<SummaryOfAssessmentResults>;
  assessmentDetails?: Maybe<AssessmentDetails>;
  appendix?: Maybe<Appendix>;
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
  addUserToProject: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  createFinding: Scalars['Boolean'];
  deleteAllFindings: Scalars['Boolean'];
  addClientToProject: Scalars['Boolean'];
  newProject: Project;
  updateProject: Project;
  deleteProject: Scalars['Boolean'];
  addUser: Scalars['Boolean'];
  createRelatorio: Scalars['Boolean'];
  deleteRelatorio: Scalars['Boolean'];
  removeRelatorioFromProject: Scalars['Boolean'];
  addAuditorToProject: Scalars['Boolean'];
  removeAuditorFromProject: Scalars['Boolean'];
  addReviewerToProject: Scalars['Boolean'];
  removeReviewerFromProject: Scalars['Boolean'];
  addProjectManagerToProject: Scalars['Boolean'];
  removeProjectManagerFromProject: Scalars['Boolean'];
  createComplexRelatorio: Scalars['Boolean'];
  updateExecutiveSummary: ComplexRelatorio;
};


export type MutationAddUserToProjectArgs = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  username: Scalars['String'];
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


export type MutationNewProjectArgs = {
  name: Scalars['String'];
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


export type MutationCreateRelatorioArgs = {
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  revDeadline?: Maybe<Scalars['String']>;
  delDeadline?: Maybe<Scalars['String']>;
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
  userId: Scalars['ID'];
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

export type Subscription = {
   __typename?: 'Subscription';
  _empty?: Maybe<Scalars['Boolean']>;
};

export type SummaryOfAssessmentResults = {
   __typename?: 'SummaryOfAssessmentResults';
  staticInformation?: Maybe<Scalars['String']>;
  minorSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentSummarized>>>;
  lowSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentSummarized>>>;
  moderateSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentSummarized>>>;
  criticalSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentSummarized>>>;
  highSeverityVulnerabilities?: Maybe<Array<Maybe<AssessmentSummarized>>>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type AddAuditorToProjectMutationVariables = {
  userId: Scalars['ID'];
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

export type AddReviewerToProjectMutationVariables = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type AddReviewerToProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addReviewerToProject'>
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

export type CreateRelatorioMutationVariables = {
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  revDeadline?: Maybe<Scalars['String']>;
  delDeadline?: Maybe<Scalars['String']>;
  projId: Scalars['ID'];
};


export type CreateRelatorioMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createRelatorio'>
);

export type DeleteProjectMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProject'>
);

export type FetchComplexRelatorioQueryVariables = {
  id: Scalars['ID'];
};


export type FetchComplexRelatorioQuery = (
  { __typename?: 'Query' }
  & { fetchComplexRelatorio: (
    { __typename?: 'ComplexRelatorio' }
    & Pick<ComplexRelatorio, 'id' | 'companyLogo' | 'reportTitle' | 'targetCompany' | 'classification' | 'version' | 'remarks' | 'date'>
    & { executiveSummary?: Maybe<(
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
      & Pick<SummaryOfAssessmentResults, 'staticInformation'>
      & { minorSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'vulnerability' | 'description' | 'details'>
      )>>>, lowSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'vulnerability' | 'description' | 'details'>
      )>>>, moderateSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'vulnerability' | 'description' | 'details'>
      )>>>, criticalSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'vulnerability' | 'description' | 'details'>
      )>>>, highSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentSummarized' }
        & Pick<AssessmentSummarized, 'vulnerability' | 'description' | 'details'>
      )>>> }
    )>, assessmentDetails?: Maybe<(
      { __typename?: 'AssessmentDetails' }
      & Pick<AssessmentDetails, 'staticInformation'>
      & { minorSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
      )>>>, lowSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
      )>>>, moderateSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
      )>>>, criticalSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
      )>>>, highSeverityVulnerabilities?: Maybe<Array<Maybe<(
        { __typename?: 'AssessmentDetailed' }
        & Pick<AssessmentDetailed, 'title' | 'description' | 'impact' | 'remediation' | 'cvssVector' | 'otherReferences' | 'technicalDetails' | 'currentStatus'>
      )>>> }
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

export type FetchClientsQueryVariables = {};


export type FetchClientsQuery = (
  { __typename?: 'Query' }
  & { fetchClients?: Maybe<Array<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'email'>
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
      & Pick<Relatorio, 'id' | 'name' | 'status' | 'revDeadline' | 'delDeadline'>
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
      & Pick<Client, 'name' | 'email'>
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
};


export type NewProjectMutation = (
  { __typename?: 'Mutation' }
  & { newProject: (
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name'>
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

export const AddAuditorToProjectDocument = gql`
    mutation addAuditorToProject($userId: ID!, $projId: ID!) {
  addAuditorToProject(userId: $userId, projId: $projId)
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
export const CreateRelatorioDocument = gql`
    mutation createRelatorio($name: String!, $status: String, $revDeadline: String, $delDeadline: String, $projId: ID!) {
  createRelatorio(name: $name, status: $status, revDeadline: $revDeadline, delDeadline: $delDeadline, projId: $projId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRelatorioGQL extends Apollo.Mutation<CreateRelatorioMutation, CreateRelatorioMutationVariables> {
    document = CreateRelatorioDocument;
    
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
export const FetchComplexRelatorioDocument = gql`
    query fetchComplexRelatorio($id: ID!) {
  fetchComplexRelatorio(id: $id) {
    id
    companyLogo
    reportTitle
    targetCompany
    classification
    version
    remarks
    date
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
      staticInformation
      minorSeverityVulnerabilities {
        vulnerability
        description
        details
      }
      lowSeverityVulnerabilities {
        vulnerability
        description
        details
      }
      moderateSeverityVulnerabilities {
        vulnerability
        description
        details
      }
      criticalSeverityVulnerabilities {
        vulnerability
        description
        details
      }
      highSeverityVulnerabilities {
        vulnerability
        description
        details
      }
    }
    assessmentDetails {
      staticInformation
      minorSeverityVulnerabilities {
        title
        description
        impact
        remediation
        cvssVector
        otherReferences
        technicalDetails
        currentStatus
      }
      lowSeverityVulnerabilities {
        title
        description
        impact
        remediation
        cvssVector
        otherReferences
        technicalDetails
        currentStatus
      }
      moderateSeverityVulnerabilities {
        title
        description
        impact
        remediation
        cvssVector
        otherReferences
        technicalDetails
        currentStatus
      }
      criticalSeverityVulnerabilities {
        title
        description
        impact
        remediation
        cvssVector
        otherReferences
        technicalDetails
        currentStatus
      }
      highSeverityVulnerabilities {
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
    mutation newProject($name: String!) {
  newProject(name: $name) {
    id
    name
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