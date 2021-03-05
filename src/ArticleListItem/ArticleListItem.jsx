import React from "react";
import { Link } from "react-router-dom";

const ArticleListItem = ({ article }) => {
  if (!article) {
    return <p>No such article</p>;
  }
  const articleDate = article.timeStamp.substring(0, 10);
  return (
    <section>
      <Link to={"/articlelist/" + article.slug}>
        <h1>{article.title}</h1>
      </Link>

      <time dateTime={articleDate}>{article.displayDate}</time>
      <p>{article.shortText}</p>
    </section>
  );
};

export default ArticleListItem;
