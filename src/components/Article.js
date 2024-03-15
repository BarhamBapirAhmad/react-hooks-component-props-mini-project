import React from "react";

function makeEmojiList(minutes) {
    let interval, roundup, emoji;
  
    if (minutes < 30) {
      interval = 5;
      roundup = 3;
      emoji = "☕️";
    } else {
      interval = 10;
      roundup = 5;
      emoji = "🍱";
    }
  
    let emojis = "";
    for (let i = 0; i < minutes; i += interval) {
      if (i < (minutes - roundup)) {
        emojis += emoji;
      }
    }
  
    return emojis;
  }
  

function Article({title, date = "January 1, 1970", preview, minutes }) {
  const emojis = makeEmojiList(minutes); 
  return (
   <article>
      <h3>{title}</h3>
      <small>{date} • {emojis} {minutes} minutes to read </small>
      <p> {preview} </p>
 </article>
  );
}

export default Article;