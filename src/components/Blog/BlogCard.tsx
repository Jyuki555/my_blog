import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BlogTagContainer } from "./BlogTagContainer";
import { GetBlogQuery_postCollection_items } from "./__generated__/GetBlogQuery";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type Props = {
  content: GetBlogQuery_postCollection_items | null;
};

export const BlogCard: React.FC<Props> = ({ content }) => {
  const classes = useStyles();
  if (!content) {
    return null;
  }
  const { title, thumbnail, tagsCollection } = content;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={thumbnail?.url ? thumbnail.url : ""}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {tagsCollection && <BlogTagContainer tagsCollection={tagsCollection} />}
      </CardActions>
    </Card>
  );
};
