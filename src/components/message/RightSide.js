import React, { useEffect, useState } from "react";
import UserCard from "../UserCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MsgDisplay from "./MsgDisplay";
import { imageShow } from "../../utils/mediaShow";
import { GLOBALTYPES } from "../../redux/constants/globalTypes";
import { imageUpload } from "../../utils/imageUpload";
import { addMessage, getMessages } from "../../redux/actions/messageAction";
import LoadIcon from "../../images/loadingMess.gif";

const RightSide = () => {
  const { auth, message, theme, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState([]);
  const [loadMedia, setLoadMedia] = useState(false);

  useEffect(() => {
    const newUser = message.users.find((user) => user._id === id);
    if (newUser) {
      setUser(newUser);
    }
  }, [message.users, id]);

  const handleChange = (e) => {
    const files = [...e.target.files];
    let err = "";
    let newMedia = [];
    files.forEach((file) => {
      if (!file) return (err = "File does not exist.");

      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/gif"
      ) {
        return (err = "Image format is incorrect.");
      }

      if (file.size > 1024 * 1024 * 5) {
        return (err = "The image largest is 5mb");
      }

      return newMedia.push(file);
    });
    if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });
    setMedia([...media, ...newMedia]);
  };

  const handleDelete = (index) => {
    const newArr = [...media];
    newArr.splice(index, 1);
    setMedia(newArr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() && media.length === 0) return;
    setText("");
    setMedia([]);
    setLoadMedia(true);

    let newArr = [];
    if (media.length > 0) newArr = await imageUpload(media);

    const msg = {
      sender: auth.user._id,
      recipient: id,
      text,
      media: newArr,
      createdAt: new Date().toISOString(),
    };

    setLoadMedia(false);
    dispatch(addMessage({ msg, auth, socket }));
  };

  useEffect(() => {
    if (id) {
      const getMessagesData = async () => {
        await dispatch(getMessages({ auth, id }));
      };
      getMessagesData();
    }
  }, [id, dispatch, auth]);

  return (
    <>
      <div className="message_header">
        {user.length !== 0 && (
          <UserCard user={user}>
            <i className="fas fa-minus-circle text-danger" />
          </UserCard>
        )}
      </div>

      <div
        className="chat_container"
        style={{ height: media.length > 0 ? "calc(100% - 180px)" : "" }}
      >
        <div className="chat_display">
          {message.data.map((msg, index) => (
            <div key={index}>
              {msg.sender !== auth.user._id && (
                <div className="chat_row friend_message">
                  <MsgDisplay user={user} msg={msg} theme={theme} />
                </div>
              )}

              {msg.sender === auth.user._id && (
                <div className="chat_row you_message">
                  <MsgDisplay user={auth.user} msg={msg} theme={theme} />
                </div>
              )}
            </div>
          ))}

          {loadMedia && (
            <div className="chat_row you_message">
              <img
                src={LoadIcon}
                alt="loading"
                style={{ filter: theme ? "invert(1)" : "invert(0)" }}
              />
            </div>
          )}
        </div>
      </div>

      <div
        className="show_media"
        style={{ display: media.length > 0 ? "grid" : "none" }}
      >
        {media.map((item, index) => (
          <div key={index} id="file_media">
            {item.type.match(/video/i) ? (
              <h2>This file is not allowed</h2>
            ) : (
              imageShow(URL.createObjectURL(item), theme)
            )}
            <span onClick={() => handleDelete(index)}>&times;</span>
          </div>
        ))}
      </div>

      <form className="chat_input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter you message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="file_upload">
          <i className="fas fa-image text-danger" />
          <input
            type="file"
            name="file"
            id="file"
            multiple
            accept="image/*,video/*"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="material-icons"
          disabled={text || media.length > 0 ? false : true}
        >
          near_me
        </button>
      </form>
    </>
  );
};

export default RightSide;
