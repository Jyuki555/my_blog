import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  GetBlogViewQuery,
  GetBlogViewQueryVariables,
} from "./__generated__/GetBlogViewQuery";
import { useParams } from "react-router-dom";
import { BlogViewContent } from "./BlogViewContent";

const BLOG_VIEW_QUERY = gql`
  query GetBlogViewQuery($id: String!) {
    post(id: $id) {
      title
      dateTime
      content {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
            }
          }
        }
      }
      tagsCollection {
        items {
          name
        }
      }
    }
  }
`;

const BlogViewContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery<GetBlogViewQuery, GetBlogViewQueryVariables>(
    BLOG_VIEW_QUERY,
    {
      variables: { id },
    }
  );

  if (!data) {
    return null;
  }

  return <>{data && <BlogViewContent post={data.post} />}</>;
};

export default BlogViewContainer;
