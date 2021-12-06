import React from "react";
import { NavLinks } from "../../components/NavLinks";

import { MapView } from "./MapView";
import "./map.css";
import PostCard from "../../components/postsCard/PostCard";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../../components/filter/Filter";
import Search from "../../components/search/Search";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";
import GoogleMapsContainer from "../../components/googleMaps/GoogleMapsContainer";
import Paginate from "../../components/paginate/Paginate";
import ReactPaginate from "react-paginate";

export function MapContainer() {
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
    setSpinner(true);
    const res = await fetch(
      `https://api.fort-net.org/Objects?Text=${search}&ObjectType=${postType}&Skip=${skipPage}&Take=${pageNum}`
    );
    const posts = await res.json();

    console.log("posts.result.length");
    console.log(posts.result);
    console.log("posts.result.length");

    setPost(posts.result);
    setPostLoad(true);
    setSpinner(false);
  };
  useEffect(() => {
    getPosts();
  }, [postType, search, skipPage]);
  return (
    <div>
      <NavLinks />
      <MapView />
      <div className="home-page-wrapper-all">
        <div className="home-page-wrapper">
          <Filter
            className="filter-posts-home"
            setPostType={setPostType}
            postType={postType}
          ></Filter>

          <div className="wrapper-posts-search">
            <Search setSearch={setSearch} className="search-home"></Search>
            {spinner && <Spinner animation="border" className="spinner-home" />}
            {!spinner && (
              <div className="posts-card-maping">
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
            )}
          </div>
          <div className="home-map">
            <GoogleMapsContainer></GoogleMapsContainer>
          </div>
        </div>
      </div>

      <Paginate setSkipPage={setSkipPage}></Paginate>
    </div>
  );
}
