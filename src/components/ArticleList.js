import React from "react";
import Article from "./Article"
import blogData from "../data/blog";


function ArticleList() {
  const Post = blogData.posts
  const article = Post.map((post) => {
    return  <Article key = {post.id} title = {post.title} date = {post.date} preview = {post.preview} minutes = { post.minutes} />;
  });

  
  return (
    <main className="ArticleList">
          {article}
    </main>
  );
}

export default ArticleList;