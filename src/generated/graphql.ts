import gql from 'graphql-tag';
import {Injectable} from '@angular/core';
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

export type Client = {
  __typename?: 'Client';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type Finding = {
  __typename?: 'Finding';
  _id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  impact: Scalars['String'];
  score?: Maybe<Scalars['String']>;
  severity?: Maybe<Scalars['String']>;
  otherreferences?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']>;
  addUserToProject: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  createFinding: Finding;
  addClientToProject: Scalars['Boolean'];
  newProject: Project;
  updateProject: Project;
  deleteProject: Scalars['Boolean'];
  addUser: Scalars['Boolean'];
  createRelatorio: Relatorio;
  deleteRelatorio: Scalars['Boolean'];
  addAuditorToProject: Scalars['Boolean'];
  addReviewerToProject: Scalars['Boolean'];
  addProjectManagerToProject: Scalars['Boolean'];
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
  score?: Maybe<Scalars['String']>;
  severity?: Maybe<Scalars['String']>;
  otherReferences?: Maybe<Scalars['String']>;
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
};


export type MutationDeleteRelatorioArgs = {
  name: Scalars['String'];
};


export type MutationAddAuditorToProjectArgs = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationAddReviewerToProjectArgs = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
};


export type MutationAddProjectManagerToProjectArgs = {
  userId: Scalars['ID'];
  projId: Scalars['ID'];
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
  findings: Array<Finding>;
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
};


export type QueryFetchUserArgs = {
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

export type CreateRelatorioMutationVariables = {
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  revDeadline?: Maybe<Scalars['String']>;
  delDeadline?: Maybe<Scalars['String']>;
};


export type CreateRelatorioMutation = (
  { __typename?: 'Mutation' }
  & { createRelatorio: (
    { __typename?: 'Relatorio' }
    & Pick<Relatorio, 'name' | 'status' | 'revDeadline' | 'delDeadline'>
  ) }
);

export type DeleteProjectMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProject'>
);

export type FetchClientsQueryVariables = {};


export type FetchClientsQuery = (
  { __typename?: 'Query' }
  & {
  fetchClients?: Maybe<Array<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'email'>
    )>>
}
  );

export type FetchProjectsQueryVariables = {};


export type FetchProjectsQuery = (
  { __typename?: 'Query' }
  & {
  fetchProjects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'status'>
    & {
    relatorios?: Maybe<Array<(
      { __typename?: 'Relatorio' }
      & Pick<Relatorio, 'id' | 'name' | 'status' | 'revDeadline' | 'delDeadline'>
      )>>, auditor?: Maybe<Array<(
      { __typename?: 'Auditor' }
      & Pick<Auditor, 'name' | 'email' | 'role'>
      )>>, reviewer?: Maybe<Array<(
      { __typename?: 'Reviewer' }
      & Pick<Reviewer, 'id' | 'name' | 'email'>
      )>>, projectManager?: Maybe<Array<(
      { __typename?: 'ProjectManager' }
      & Pick<ProjectManager, 'name' | 'email'>
      )>>, client?: Maybe<Array<(
      { __typename?: 'Client' }
      & Pick<Client, 'name' | 'email'>
      )>>
  }
  )> }
);

export type FetchUsersQueryVariables = {};


export type FetchUsersQuery = (
  { __typename?: 'Query' }
  & {
  fetchUsers?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
    )>>
}
  );

export type NewProjectMutationVariables = {
  name: Scalars['String'];
};


export type NewProjectMutation = (
  { __typename?: 'Mutation' }
  & {
  newProject: (
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name'>
    )
}
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

export const CreateRelatorioDocument = gql`
  mutation createRelatorio($name: String!, $status: String, $revDeadline: String, $delDeadline: String) {
    createRelatorio(name: $name, status: $status, revDeadline: $revDeadline, delDeadline: $delDeadline) {
      name
      status
      revDeadline
      delDeadline
    }
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
        name
        email
        role
      }
      reviewer {
        id
        name
        email
      }
      projectManager {
        name
        email
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
