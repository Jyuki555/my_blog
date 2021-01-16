import React from "react";
import Chip from "@material-ui/core/Chip";
import { GetBlogQuery_postCollection_items_tagsCollection } from "./__generated__/GetBlogQuery";

type Props = {
  tagsCollection: GetBlogQuery_postCollection_items_tagsCollection;
};

export const BlogTagContainer: React.FC<Props> = ({ tagsCollection }) => {
  const { items } = tagsCollection;

  return (
    <>
      {items.map((item, idx) => (
        <Chip key={idx} variant="outlined" color="primary" label={item?.name} />
      ))}
    </>
  );
};
