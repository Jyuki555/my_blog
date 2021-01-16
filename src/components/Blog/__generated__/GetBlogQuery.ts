/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBlogQuery
// ====================================================

export interface GetBlogQuery_postCollection_items_content {
  __typename: "PostContent";
  json: any;
}

export interface GetBlogQuery_postCollection_items_thumbnail {
  __typename: "Asset";
  title: string | null;
  url: string | null;
}

export interface GetBlogQuery_postCollection_items_tagsCollection_items {
  __typename: "Tags";
  name: string | null;
}

export interface GetBlogQuery_postCollection_items_tagsCollection {
  __typename: "PostTagsCollection";
  items: (GetBlogQuery_postCollection_items_tagsCollection_items | null)[];
}

export interface GetBlogQuery_postCollection_items {
  __typename: "Post";
  title: string | null;
  content: GetBlogQuery_postCollection_items_content | null;
  thumbnail: GetBlogQuery_postCollection_items_thumbnail | null;
  tagsCollection: GetBlogQuery_postCollection_items_tagsCollection | null;
}

export interface GetBlogQuery_postCollection {
  __typename: "PostCollection";
  items: (GetBlogQuery_postCollection_items | null)[];
}

export interface GetBlogQuery {
  postCollection: GetBlogQuery_postCollection | null;
}
