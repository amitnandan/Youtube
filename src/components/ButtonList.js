import React from "react";
import Button from "./Button";

const list = [
  "ALL",
  "Live",
  "Gaming",
  "Songs",
  "Soccer",
  "Music",
  "Cooking",
  "Streamer",
  "News",
  "Game Shows",
  "Hollywood Music",
  "Motivation",
  "Gadgets",
  "Pop Music",
  "Love Songs",
  "Mantras",
  "Lessons",
  "Guitar",
];

const ButtonList = () => {
  return (
    <div className="flex  overflow-x-auto container">
      {list.map((tags, index) => (
        <Button key={index} name={tags} />
      ))}
    </div>
  );
};

export default ButtonList;
