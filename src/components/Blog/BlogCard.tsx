import React from "react";
import { BlogTagContainer } from "./BlogTagContainer";
import { GetBlogQuery_postCollection_items } from "./__generated__/GetBlogQuery";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import styled from "styled-components";

type Props = {
  content: GetBlogQuery_postCollection_items | null;
};

export const BlogCard: React.FC<Props> = ({ content }) => {
  if (!content) {
    return null;
  }
  const { title, thumbnail, tagsCollection, dateTime } = content;

  return (
    <Card>
      <CardActionArea to="/">
        <CardMedia src={thumbnail?.url ? thumbnail.url : ""} />
        <CardDateTime>{dayjs(dateTime).format("YYYY年MM月DD日")}</CardDateTime>
        <CardTitle>{title}</CardTitle>
      </CardActionArea>
      <CardTagActionArea>
        {tagsCollection && <BlogTagContainer tagsCollection={tagsCollection} />}
      </CardTagActionArea>
    </Card>
  );
};

const Card = styled.article`
  max-height: 400px;
  box-shadow: 0 18px 28px -12px rgba(0, 0, 0, 0.12);
`;

const CardActionArea = styled(Link)``;

const CardDateTime = styled.p`
  padding 16px 16px 4px 16px;
  letter-spacing: 2.5px;
  color: #b1b1b1;
`;

const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0px 16px 16px 16px;
  color: #313a46;
}`;

const CardMedia = styled.img`
  height: 55%;
  width: 100%;
`;

const CardTagActionArea = styled.div`
  padding: 0px 16px;
`;
