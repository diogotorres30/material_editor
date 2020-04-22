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



export type Auditor = User & {
   __typename?: 'Auditor';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: Scalars['String'];
};

export type Client = {
   __typename?: 'Client';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type Dog = {
   __typename?: 'Dog';
  id: Scalars['ID'];
  name: Scalars['String'];
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
  deleteUser: Scalars['Boolean'];
  createDog: Dog;
  createFinding: Finding;
  addClientToProject: Client;
  newProject: Project;
  deleteProject: Scalars['Boolean'];
  addUser: Scalars['Boolean'];
  createRelatorio: Relatorio;
  deleteRelatorio: Scalars['Boolean'];
};


export type MutationDeleteUserArgs = {
  username: Scalars['String'];
};


export type MutationCreateDogArgs = {
  name?: Maybe<Scalars['String']>;
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
  name: Scalars['String'];
  email: Scalars['String'];
};


export type MutationNewProjectArgs = {
  name: Scalars['String'];
  clientName?: Maybe<Scalars['String']>;
  clientEmail?: Maybe<Scalars['String']>;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationAddUserArgs = {
  name: Scalars['String'];
};


export type MutationCreateRelatorioArgs = {
  name: Scalars['String'];
  projId: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
  revDeadline?: Maybe<Scalars['String']>;
  delDeadline?: Maybe<Scalars['String']>;
};


export type MutationDeleteRelatorioArgs = {
  name: Scalars['String'];
};

export type Project = {
   __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: ProjectStatus;
  relatorios?: Maybe<Array<Relatorio>>;
  auditor?: Maybe<Array<Auditor>>;
  reviewer?: Maybe<Array<Auditor>>;
  projectManager?: Maybe<Array<Auditor>>;
  clients?: Maybe<Array<Client>>;
};

export enum ProjectStatus {
  Open = 'OPEN',
  Inprogress = 'INPROGRESS',
  Closed = 'CLOSED'
}

export type Query = {
   __typename?: 'Query';
  _empty?: Maybe<Scalars['Boolean']>;
  getUsers?: Maybe<Array<User>>;
  getUser?: Maybe<User>;
  dogs: Array<Dog>;
  findings: Array<Finding>;
  getClients?: Maybe<Array<Client>>;
  getClient?: Maybe<Client>;
  getProjects: Array<Project>;
  getProject?: Maybe<Project>;
  getRelatorios: Array<Relatorio>;
  getRelatorio: Relatorio;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryGetClientArgs = {
  id: Scalars['ID'];
};


export type QueryGetProjectArgs = {
  id: Scalars['ID'];
};


export type QueryGetRelatorioArgs = {
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

export type RelatorioCreated = {
   __typename?: 'RelatorioCreated';
  relatorio: Relatorio;
};

export enum RelatorioStatus {
  Open = 'OPEN',
  Inprogress = 'INPROGRESS',
  Review = 'REVIEW',
  Reviewed = 'REVIEWED',
  Closed = 'CLOSED'
}

export type Subscription = {
   __typename?: 'Subscription';
  _empty?: Maybe<Scalars['Boolean']>;
  relatorioCreated: RelatorioCreated;
};

export type User = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type AddClientToProjectMutationVariables = {
  clientId: Scalars['ID'];
  projId: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};


export type AddClientToProjectMutation = (
  { __typename?: 'Mutation' }
  & { addClientToProject: (
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name'>
  ) }
);

export type CreateDogMutationVariables = {
  name: Scalars['String'];
};


export type CreateDogMutation = (
  { __typename?: 'Mutation' }
  & { createDog: (
    { __typename?: 'Dog' }
    & Pick<Dog, 'id' | 'name'>
  ) }
);

export type CreateRelatorioMutationVariables = {
  name: Scalars['String'];
  projId: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
  revDeadline?: Maybe<Scalars['String']>;
  delDeadline?: Maybe<Scalars['String']>;
};


export type CreateRelatorioMutation = (
  { __typename?: 'Mutation' }
  & { createRelatorio: (
    { __typename?: 'Relatorio' }
    & Pick<Relatorio, 'name'>
  ) }
);

export type DeleteProjectMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteProjectMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProject'>
);

export type DogsListQueryVariables = {};


export type DogsListQuery = (
  { __typename?: 'Query' }
  & { dogs: Array<(
    { __typename?: 'Dog' }
    & Pick<Dog, 'id' | 'name'>
  )> }
);

export type GetClientsQueryVariables = {};


export type GetClientsQuery = (
  { __typename?: 'Query' }
  & { getClients?: Maybe<Array<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'email'>
  )>> }
);

export type GetProjectsQueryVariables = {};


export type GetProjectsQuery = (
  { __typename?: 'Query' }
  & { getProjects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'status'>
    & { relatorios?: Maybe<Array<(
      { __typename?: 'Relatorio' }
      & Pick<Relatorio, 'id' | 'name'>
    )>>, auditor?: Maybe<Array<(
      { __typename?: 'Auditor' }
      & Pick<Auditor, 'name' | 'email' | 'role'>
    )>>, reviewer?: Maybe<Array<(
      { __typename?: 'Auditor' }
      & Pick<Auditor, 'id' | 'name' | 'email' | 'role'>
    )>>, projectManager?: Maybe<Array<(
      { __typename?: 'Auditor' }
      & Pick<Auditor, 'name' | 'email' | 'role'>
    )>>, clients?: Maybe<Array<(
      { __typename?: 'Client' }
      & Pick<Client, 'name' | 'email'>
    )>> }
  )> }
);

export type GetUsersQueryVariables = {};


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers?: Maybe<Array<(
    { __typename?: 'Auditor' }
    & Pick<Auditor, 'id' | 'name' | 'email'>
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

export const AddClientToProjectDocument = gql`
    mutation addClientToProject($clientId: ID!, $projId: ID!, $name: String!, $email: String!) {
  addClientToProject(clientId: $clientId, projId: $projId, name: $name, email: $email) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddClientToProjectGQL extends Apollo.Mutation<AddClientToProjectMutation, AddClientToProjectMutationVariables> {
    document = AddClientToProjectDocument;
    
  }
export const CreateDogDocument = gql`
    mutation createDog($name: String!) {
  createDog(name: $name) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDogGQL extends Apollo.Mutation<CreateDogMutation, CreateDogMutationVariables> {
    document = CreateDogDocument;
    
  }
export const CreateRelatorioDocument = gql`
    mutation createRelatorio($name: String!, $projId: ID!, $status: String, $revDeadline: String, $delDeadline: String) {
  createRelatorio(name: $name, projId: $projId, status: $status, revDeadline: $revDeadline, delDeadline: $delDeadline) {
    name
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
export const DogsListDocument = gql`
    query dogsList {
  dogs {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DogsListGQL extends Apollo.Query<DogsListQuery, DogsListQueryVariables> {
    document = DogsListDocument;
    
  }
export const GetClientsDocument = gql`
    query getClients {
  getClients {
    id
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetClientsGQL extends Apollo.Query<GetClientsQuery, GetClientsQueryVariables> {
    document = GetClientsDocument;
    
  }
export const GetProjectsDocument = gql`
    query getProjects {
  getProjects {
    id
    name
    status
    relatorios {
      id
      name
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
      role
    }
    projectManager {
      name
      email
      role
    }
    clients {
      name
      email
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProjectsGQL extends Apollo.Query<GetProjectsQuery, GetProjectsQueryVariables> {
    document = GetProjectsDocument;
    
  }
export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    id
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
    document = GetUsersDocument;
    
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