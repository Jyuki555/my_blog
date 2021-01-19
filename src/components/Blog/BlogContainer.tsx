import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ContentLoading } from "../../common/components/ContentLoading";
import { BlogContent } from "./BlogContent";
import { GetBlogQuery } from "./__generated__/GetBlogQuery";

export const BLOG_QUERY = gql`
  query GetBlogQuery {
    postCollection {
      items {
        slug
        title
        dateTime
        content {
          json
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
  }
`;

const BlogContainer: React.FC = () => {
  const { loading, data } = useQuery<GetBlogQuery>(BLOG_QUERY);

  return (
    <div>
      {loading && <ContentLoading />}
      {data && data.postCollection && (
        <BlogContent postCollection={data.postCollection} />
      )}
    </div>
  );
};

export default BlogContainer;
