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



export type Dog = {
   __typename?: 'Dog';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Message = {
   __typename?: 'Message';
  id: Scalars['ID'];
  text: Scalars['String'];
  user: User;
};

export type Mutation = {
   __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']>;
  createMessage: Message;
  deleteMessage: Scalars['Boolean'];
  createDog: Dog;
};


export type MutationCreateMessageArgs = {
  text: Scalars['String'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID'];
};


export type MutationCreateDogArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  _empty?: Maybe<Scalars['Boolean']>;
  users?: Maybe<Array<User>>;
  user?: Maybe<User>;
  me?: Maybe<User>;
  messages: Array<Message>;
  message: Message;
  dogs: Array<Dog>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryMessageArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
   __typename?: 'Subscription';
  _empty?: Maybe<Scalars['Boolean']>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  messages?: Maybe<Array<Message>>;
};

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