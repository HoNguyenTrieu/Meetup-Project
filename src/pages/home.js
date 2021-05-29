import React from "react";
import { useSelector } from "react-redux";
import Posts from "../components/home/Posts";
import Status from "../components/home/Status";
import LoadIcon from "../images/heartLoading.gif";

const Home = () => {
  const { homePosts } = useSelector((state) => state);
  return (
    <div className="home row mx-0">
      <div className="col-md-8">
        <Status />
        {homePosts.loading ? (
          <img className="d-block mx-auto" src={LoadIcon} arc="loading" />
        ) : homePosts.result === 0 ? (
          <h2 className="text-center">No Post Yet!</h2>
        ) : (
          <Posts />
        )}
      </div>
      <div className="col-md-4">right Sidebar</div>
    </div>
  );
};

export default Home;
