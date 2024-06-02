import React, { useState } from "react";
import PostBox from "./PostBox";
import "../styles/Posts.css"; // Updated path
import goatImage from "../images/goat.jpeg";

const Posts = () => {
  const [filter, setFilter] = useState("all");

  const posts = [
    {
      category: "goat",
      imgSrc: goatImage,
      postLink: "post-page copy 3.html",
      breed: "Pahadi",
      price: "₹10000",
      weight:"12KG",
      location: " Okhla Mandi ",
      profileImg: "../images/goat",
      profileName: "HOW?",
    },
    {
      category: "sheep",
      imgSrc: goatImage,
      postLink: "post-page copy 3.html",
      breed: "Desi",
      price: "₹12000",
      weight:"15KG",
      location: " Shaheen bagh ",
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
