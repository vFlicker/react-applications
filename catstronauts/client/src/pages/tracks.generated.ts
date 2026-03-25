// @ts-nocheck
import type * as Types from '../types/graphql.generated';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetTracksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTracksQuery = { tracksForHome: Array<{ __typename?: 'Track', title: string, thumbnail: string, id: string, length: number, modulesCount: number, author: { __typename?: 'Author', id: string, name: string, photo: string } }> };


export const GetTracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tracksForHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TrackCard"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TrackCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Track"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"modulesCount"}}]}}]} as unknown as DocumentNode<GetTracksQuery, GetTracksQueryVariables>;