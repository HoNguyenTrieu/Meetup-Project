import React from "react";
import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import { useDispatch, useSelector } from "react-redux";
import LoadIcon from "../../images/heartLoading.gif";
import { getSuggestions } from "../../redux/actions/suggestionsAction";

const RightSideSuggest = () => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="my-4">
      <UserCard user={auth.user} />

      <div className="d-flex justify-content-between align-items-center my-2 ">
        <h5 className="text-danger">Suggested</h5>
        {!suggestions.loading && (
          <i
            className="fas fa-retweet"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(getSuggestions(auth.token))}
          />
        )}
      </div>

      {suggestions.loading ? (
        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user) => (
            <UserCard key={user._id} user={user}>
              <FollowBtn user={user} />
            </UserCard>
          ))}
        </div>
      )}
      <div style={{ opacity: 0.5 }} className="my-2">
        <a href="https://www.dota2.com/home" target="_blank" rel="noreferrer">
          https://www.dota2.com/home
        </a>
        <small className="d-block">
          “A MODERN MULTIPLAYER MASTERPIECE.” - DESTRUCTOID
        </small>
      </div>
    </div>
  );
};

export default RightSideSuggest;
