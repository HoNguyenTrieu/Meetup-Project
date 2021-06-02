import React, { useEffect, useRef, useState } from "react";
import UserCard from "../UserCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MsgDisplay from "./MsgDisplay";
import { imageShow } from "../../utils/mediaShow";
import { GLOBALTYPES } from "../../redux/constants/globalTypes";
import { imageUpload } from "../../utils/imageUpload";
import {
  addMessage,
  getMessages,
  MESS_TYPES,
} from "../../redux/actions/messageAction";
import LoadIcon from "../../images/loadingMess.gif";

const RightSide = () => {
  const { auth, message, theme, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState([]);
  const [loadMedia, setLoadMedia] = useState(false);
  const refDisplay = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = message.data.filter(
      (item) => item.sender === auth.user._id || item.sender === id
    );
    setData(newData);
  }, [message.data, auth.user._id, id]);

  useEffect(() => {
    if (id && message.users.length > 0) {
      setTimeout(() => {
        refDisplay.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 50);
      const newUser = message.users.find((user) => user._id === id);
      if (newUser) {
        setUser(newUser);
      }
    }
  }, [message.users, id]);

  const handleChangeImage = (e) => {
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
    await dispatch(addMessage({ msg, auth, socket }));
    if (refDisplay.current) {
      refDisplay.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  useEffect(() => {
    const getMessagesData = async () => {
      await dispatch(getMessages({ auth, id }));
      setTimeout(() => {
        refDisplay.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 50);
    };
    getMessagesData();
  }, [id, dispatch, auth]);

  // useEffect(() => {
  //   if (refDisplay.current) {
  //     refDisplay.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //     });
  //   }
  // }, [text]);

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
        <div className="chat_display" ref={refDisplay}>
          {data.map((msg, index) => (
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
            {imageShow(URL.createObjectURL(item), theme)}
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
            accept="image/*"
            onChange={handleChangeImage}
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
