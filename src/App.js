import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import PostFilter from "./components/PostFilter";
import Posts from "./components/Posts";
import "./styles/App.css";
import Footer from "./components/Footer";

const App = () => {
  const [filter, setFilter] = React.useState("all");

  return (
    <div>
      <Header />
      <Home />
      <PostFilter setFilter={setFilter} />
      <Posts filter={filter} />
      <Footer />
    </div>
  );
};

export default App;
