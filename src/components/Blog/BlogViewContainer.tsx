import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  GetBlogViewQuery,
  GetBlogViewQueryVariables,
} from "./__generated__/GetBlogViewQuery";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

  if (!data) {
    return null;
  }

  const block = data.post?.content?.links.assets.block;

  const RICHTEXT_OPTIONS: Options = {
    renderNode: {
      [BLOCKS.DOCUMENT]: (_, children) => (
        <div className="document">{children}</div>
      ),
      [BLOCKS.HEADING_1]: (_, children) => (
        <h1 className="heading-1">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (_, children) => (
        <h2 className="heading-2">{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <p className="paragraph">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul className="ul_list">{children}</ul>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, _) => {
        const imgId = node.data.target.sys.id;
        const assetImg = block?.find((entry) => entry?.sys.id === imgId);

        if (!assetImg) {
          return null;
        }
        return (
          <img
            src={assetImg.url ? assetImg.url : ""}
            alt={assetImg.title ? assetImg.title : ""}
          />
        );
      },
    },
  };

  return (
    <>
      {data.post &&
        documentToReactComponents(data.post.content?.json, RICHTEXT_OPTIONS)}
    </>
  );
};

export default BlogViewContainer;
