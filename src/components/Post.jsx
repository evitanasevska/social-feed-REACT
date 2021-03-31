import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";

function Post(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const [input, setInput] = useState("");
  const [comment, setComment] = useState([]);

  const handleChange = e => setInput(e.target.value)

  function submit(){
    setComment(input)
    setInput("")
  }

  return (
    <div className="post-excerpt">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <p className="com">{comment}</p>
      <input
        value={input}
        onChange={handleChange}
        className="comment"
        placeholder="Write a comment"></input>
      <button onClick={submit} className="comment-btn">
        <SendIcon style={{fontSize: "10px"}} />
      </button>
      <button className="delete-btn" onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Post;
