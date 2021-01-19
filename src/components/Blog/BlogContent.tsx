import React from "react";
import { GetBlogQuery_postCollection } from "./__generated__/GetBlogQuery";
import { BlogCard } from "./BlogCard";
import styled from "styled-components";

type Props = {
  postCollection: GetBlogQuery_postCollection;
};

export const BlogContent: React.FC<Props> = ({ postCollection }) => {
  const { items } = postCollection;

  return (
    <BlogCardConttainer>
      {items.map((item, idx) => (
        <BlogCard key={idx} content={item} />
      ))}
    </BlogCardConttainer>
  );
};

const BlogCardConttainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(345px, 1fr));
  justify-items: center;
  gap: 1.25em;
`;
