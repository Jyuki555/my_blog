import React from "react";
import { gql, useQuery } from "@apollo/client";
import { BlogCard } from "./BlogContent";
import { ContentLoading } from "../../common/components/ContentLoading";

const BLOG_QUERY = gql`
  query GetBlogQuery {
    postCollection {
      items {
        title
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
  const { loading, data } = useQuery(BLOG_QUERY);

  console.log(data);

  return (
    <div>
      {loading && <ContentLoading />}
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogContainer;
