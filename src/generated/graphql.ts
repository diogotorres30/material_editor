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



export type Client = {
   __typename?: 'Client';
  id: Scalars['ID'];
  name: Scalars['String'];
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
  deleteProject: Scalars['Boolean'];
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


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
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
  relatorios?: Maybe<Array<Relatorio>>;
  users?: Maybe<Array<User>>;
  clients?: Maybe<Array<Client>>;
};

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
  project: Project;
  status?: Maybe<Status>;
  revDeadline?: Maybe<Scalars['String']>;
  delDeadline?: Maybe<Scalars['String']>;
};

export enum Role {
  Auditor = 'AUDITOR',
  Reviewer = 'REVIEWER',
  Pm = 'PM'
}

export enum Status {
  Open = 'OPEN',
  Inprogress = 'INPROGRESS',
  Review = 'REVIEW',
  Reviewed = 'REVIEWED',
  Closed = 'CLOSED'
}

export type Subscription = {
   __typename?: 'Subscription';
  _empty?: Maybe<Scalars['Boolean']>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  role: Role;
};

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

export type GetProjectsQueryVariables = {};


export type GetProjectsQuery = (
  { __typename?: 'Query' }
  & { getProjects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name'>
    & { relatorios?: Maybe<Array<(
      { __typename?: 'Relatorio' }
      & Pick<Relatorio, 'name'>
    )>>, users?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'name' | 'role'>
    )>>, clients?: Maybe<Array<(
      { __typename?: 'Client' }
      & Pick<Client, 'name'>
    )>> }
  )> }
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

export type DogsListQueryVariables = {};


export type DogsListQuery = (
  { __typename?: 'Query' }
  & { dogs: Array<(
    { __typename?: 'Dog' }
    & Pick<Dog, 'id' | 'name'>
  )> }
);

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
export const GetProjectsDocument = gql`
    query getProjects {
  getProjects {
    id
    name
    relatorios {
      name
    }
    users {
      name
      role
    }
    clients {
      name
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