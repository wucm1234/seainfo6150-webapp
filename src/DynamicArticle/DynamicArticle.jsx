import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {

  const emailAddr = props.article.authorEmail;
  const articleDate = props.article.timeStamp.substring(0, 10);
  return (
    <article>
      <header>
        <title></title>
        <h1>{props.article.title}</h1>
        <address>
          by {props.article.author} (
          <a href={emailAddr}>{props.article.authorEmail}</a>)
          <br />
        </address>
          <time dateTime={articleDate}>{props.article.displayDate}</time>
      </header>
      <HTMLText text={props.article.text} ></HTMLText>
    </article>
  );
};

export default DynamicArticle;
