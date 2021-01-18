import React from "react";
import { GetBlogQuery_postCollection_items_tagsCollection } from "./__generated__/GetBlogQuery";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  tagsCollection: GetBlogQuery_postCollection_items_tagsCollection;
};

export const BlogTagContainer: React.FC<Props> = ({ tagsCollection }) => {
  const { items } = tagsCollection;

  return (
    <ChipGroup>
      {items.map((item, idx) => (
        <Chip key={idx} to="/">
          {item?.name}
        </Chip>
      ))}
    </ChipGroup>
  );
};

const ChipGroup = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Chip = styled(Link)`
  display: block;
  line-height: 1;
  letter-spacing: 1px;
  font-size: 0.875rem;
  margin-right: 4px;
  padding: 8px 10px;
  border: 1px solid #b3b3b3;
  border-radius: 2px;
  color: #2a292a;
`;
