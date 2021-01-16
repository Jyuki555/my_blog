/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfileQuery
// ====================================================

export interface GetProfileQuery_person_image {
  __typename: "Asset";
  url: string | null;
}

export interface GetProfileQuery_person {
  __typename: "Person";
  name: string | null;
  image: GetProfileQuery_person_image | null;
}

export interface GetProfileQuery {
  person: GetProfileQuery_person | null;
}

export interface GetProfileQueryVariables {
  id: string;
}
