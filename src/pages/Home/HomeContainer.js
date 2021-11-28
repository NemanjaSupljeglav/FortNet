import React from "react";
import HomeView from "./HomeView";
import { NavLinks } from "./components/NavLinks";
import "./homePage.css";
import PostCard from "../../components/postsCard/PostCard";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../../components/filter/Filter";
import Search from "../../components/search/Search";
import NextPage from "../../components/nextPage/NextPage"
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';
export function HomeContainer() {
  const [post, setPost] = useState([]);
  const [postLoad, setPostLoad] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [postType, setPostType] = useState("");
  const [pageNum, setPageNum] = useState(9);
  const [skipPage, setSkipPage] = useState(0);
  const [search, setSearch] = useState("");
  const ObjectType = [
    "Object",
    "Accommodation",
    "EnoGastro",
    "Heritage",
    "Tourism",
  ];
  console.log("search");
  console.log(search.target);
  console.log("search");
  const getPosts = async () => {
    setSpinner(true)
    const res = await fetch(
      `https://api.fort-net.org/Objects?Text=${search}&ObjectType=${postType}&Skip=${skipPage}&Take=${pageNum}`

    );
    const posts = await res.json();

    console.log("posts.result.length");
    console.log(posts.result);
    console.log("posts.result.length");

    setPost(posts.result);
    setPostLoad(true);
    setSpinner(false)
  };
  useEffect(() => {
    getPosts();
  }, [postType, search, skipPage]);
  return (
    <div>



      <NavLinks />
      <HomeView title="Home" />
      <div className="home-page-wrapper-all">
        <Search setSearch={setSearch}></Search>
        <div className="home-page-wrapper">
          <Filter
            className="filter-posts-home"
            setPostType={setPostType}
            postType={postType}
          ></Filter>

          <div className="posts-card-maping">
            {spinner && <Spinner animation="border" variant="primary" />}
            {post?.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  postImages={post.photoUrl}
                  objectType={post.objectType}
                  name={post.name}
                ></PostCard>
              );
            })}
          </div>
        </div>

        <NextPage setPageNum={setPageNum} setSkipPage={setSkipPage} skipPage={skipPage}></NextPage>
      </div>

    </div>
  );
}
