import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  GetBlogViewQuery,
  GetBlogViewQueryVariables,
} from "./__generated__/GetBlogViewQuery";
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
      thumbnail {
        title
        url
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
  const { data } = useQuery<GetBlogViewQuery, GetBlogViewQueryVariables>(
    BLOG_VIEW_QUERY,
    {
      variables: { id: "4PX6ASnAjLtSwIKkHz07J3" },
    }
  );

  console.log(data);

  if (!data) {
    return null;
  }

  return <>{data.post && <BlogViewContent post={data.post} />}</>;
};

export default BlogViewContainer;
