import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import {getMainDefinition} from "apollo-utilities";

const uri = 'http://127.0.0.1:4001/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({
    uri: 'http://127.0.0.1:4001/graphql'
  });
  const ws = new WebSocketLink({
    uri: 'ws://127.0.0.1:4001/graphql',
    options: {
      reconnect: true
    }
  });

  const link = split(
    // split based on operation type
    ({ query }) => {
      let definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    ws,
    http,
  );
  return {
    link: link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
