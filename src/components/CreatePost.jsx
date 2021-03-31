import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";


function CreatePost(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="create-post">
      <form className="create-note">
        {isExpanded && (
          <input
            autocomplete="off"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Topic"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Share your thoughts..."
          rows={isExpanded ? 3 : 1}
        />
          <button onClick={submitNote}>
            <AddIcon />
          </button>
      </form>
    </div>
  );
}

export default CreatePost;
