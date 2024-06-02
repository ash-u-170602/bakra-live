import React, { useState } from "react";
import PostBox from "./PostBox";
import "../styles/Posts.css"; // Updated path
import goatImage from "../images/goat.jpeg";
import goatNewImage from "../images/Boer-goat.webp";

const Posts = () => {
  const [filter, setFilter] = useState("all");

  const posts = [
    {
      category: "other",
      imgSrc: goatImage,
      postLink: "post-page copy 3.html",
      title: "GOAT",
      date: "19th Feb 2024",
      description: " Very good goat ",
      profileImg: "../images/goat",
      profileName: "HOW?",
    },
    {
      category: "other",
      imgSrc: goatImage,
      postLink: "post-page copy 3.html",
      title: "GOAT",
      date: "19th Feb 2024",
      description: " Very good goat ",
      profileImg: "../images/goat",
      profileName: "HOW?",
    },
    {
      category: "other",
      imgSrc: goatNewImage,
      postLink: "post-page copy 3.html",
      title: "GOAT",
      date: "19th Feb 2024",
      description: " Very good goat ",
      profileImg: "../images/goat",
      profileName: "HOW?",
    },
    {
      category: "other",
      imgSrc: goatImage,
      postLink: "post-page copy 3.html",
      title: "GOAT",
      date: "19th Feb 2024",
      description: " Very good goat ",
      profileImg: "../images/goat",
      profileName: "HOW?",
    },
    {
      category: "other",
      imgSrc: goatNewImage,
      postLink: "post-page copy 3.html",
      title: "GOAT",
      date: "19th Feb 2024",
      description: " Very good goat ",
      profileImg: "../images/goat",
      profileName: "HOW?",
    },
    {
      category: "other",
      imgSrc: goatImage,
      postLink: "post-page copy 3.html",
      title: "GOAT",
      date: "19th Feb 2024",
      description: " Very good goat ",
      profileImg: "../images/goat",
      profileName: "HOW?",
    },
  ];

  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.category === filter);

  return (
    <section className="post container">
      {filteredPosts.map((post, index) => (
        <PostBox key={index} {...post} />
      ))}
    </section>
  );
};

export default Posts;
