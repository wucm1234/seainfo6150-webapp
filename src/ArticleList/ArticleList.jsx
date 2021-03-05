import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p>You have no data!</p>;
  }
  return (
    <main>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.slug}>
              <ArticleListItem article={article} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ArticleList;
