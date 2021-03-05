import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Link } from "react-router-dom";

const DynamicArticle = (props) => {
  if (!props.article) {
    return <p>Cannot find article.</p>;
  }

  const emailAddr = props.article.authorEmail;
  const articleDate = props.article.timeStamp.substring(0, 10);
  
  return (
    <>
      <nav>
        <Link to="/articlelist">Back</Link>
      </nav>
      <article>
        <header>
          <h1>{props.article.title}</h1>
          <address>
            by {props.article.author} (
            <a href={emailAddr}>{props.article.authorEmail}</a>)
            <br />
          </address>
          <time dateTime={articleDate}>{props.article.displayDate}</time>
        </header>
        <HTMLText text={props.article.text}></HTMLText>
      </article>
    </>
  );
};

export default DynamicArticle;
