import React from "react";
import { GetBlogViewQuery_post } from "./__generated__/GetBlogViewQuery";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogTagContainer } from "./BlogTagContainer";
import dayjs from "dayjs";
import MediaQuery from "../../assets/MediaQuery";
import styled from "styled-components";

type Props = {
  post: GetBlogViewQuery_post | null;
};

export const BlogViewContent: React.FC<Props> = ({ post }) => {
  if (!post) {
    return null;
  }
  const block = post.content?.links.assets.block;
  const { title, tagsCollection, dateTime } = post;

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
        } else {
          return (
            <img
              className="embedded_asset"
              src={assetImg.url ? assetImg.url : ""}
              alt={assetImg.title ? assetImg.title : ""}
            />
          );
        }
      },
    },
  };
  return (
    <Content>
      <Title>{title}</Title>
      <DateTime>{dayjs(dateTime).format("YYYY年MM月DD日")}</DateTime>
      {tagsCollection && <BlogTagContainer tagsCollection={tagsCollection} />}
      {documentToReactComponents(post.content?.json, RICHTEXT_OPTIONS)}
    </Content>
  );
};

const Content = styled.article`
  max-width: 1200px;
  margin: auto;
  padding: 3em 2em;
  font-family: monospace;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    padding: 3em 1em;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.4;
  margin-bottom: 1rem;
`;

const DateTime = styled.p`
  margin: 8px 0px;
  letter-spacing: 2.5px;
  color: #b1b1b1;
`;
