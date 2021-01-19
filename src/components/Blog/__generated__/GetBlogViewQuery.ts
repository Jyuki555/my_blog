/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBlogViewQuery
// ====================================================

export interface GetBlogViewQuery_post_content_links_assets_block_sys {
  __typename: "Sys";
  id: string;
}

export interface GetBlogViewQuery_post_content_links_assets_block {
  __typename: "Asset";
  sys: GetBlogViewQuery_post_content_links_assets_block_sys;
  url: string | null;
  title: string | null;
}

export interface GetBlogViewQuery_post_content_links_assets {
  __typename: "PostContentAssets";
  block: (GetBlogViewQuery_post_content_links_assets_block | null)[];
}

export interface GetBlogViewQuery_post_content_links {
  __typename: "PostContentLinks";
  assets: GetBlogViewQuery_post_content_links_assets;
}

export interface GetBlogViewQuery_post_content {
  __typename: "PostContent";
  json: any;
  links: GetBlogViewQuery_post_content_links;
}

export interface GetBlogViewQuery_post_tagsCollection_items {
  __typename: "Tags";
  name: string | null;
}

export interface GetBlogViewQuery_post_tagsCollection {
  __typename: "PostTagsCollection";
  items: (GetBlogViewQuery_post_tagsCollection_items | null)[];
}

export interface GetBlogViewQuery_post {
  __typename: "Post";
  title: string | null;
  dateTime: any | null;
  content: GetBlogViewQuery_post_content | null;
  tagsCollection: GetBlogViewQuery_post_tagsCollection | null;
}

export interface GetBlogViewQuery {
  post: GetBlogViewQuery_post | null;
}

export interface GetBlogViewQueryVariables {
  id: string;
}
