import React, { useState, useEffect } from "react";
import axios from "axios";
import PostBox from "./PostBox";
import "../styles/Posts.css";
import imageGoat from "../images/goat.jpeg"

const Posts = ({ filter }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://bakra-api.onrender.com/user/view");
        const formattedData = response.data.map((post) => ({
          id: post.id,
          price: `₹${post.price}`,
          imagesUrl: post.images_url && post.images_url.length > 0 ? post.images_url : imageGoat,
          category: post.type,
          weight: `${post.weight}KG`,
          breed: post.breed,
          location: post.location,
          isAvailable: post.is_available,
        }));
        setPosts(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredPosts = filter === "all" ? posts : posts.filter((post) => post.category === filter);

  return (
    <section className="post container">
      {filteredPosts.map((post, index) => (
        <PostBox key={index} {...post} />
      ))}
    </section>
  );
};

export default Posts;
