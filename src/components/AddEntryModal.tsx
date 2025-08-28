import { useState } from "react";

const AddEntryModal = ({ setIsEntryModalExpanded}: {setIsEntryModalExpanded: (value: boolean) => void }) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <>
      <div className="entry-container">
        <h1>Add your entry</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button type="submit">Save</button>
          <button onClick={() => setIsEntryModalExpanded(false)}>Close</button>
        </form>
      </div>
    </>
  );
};
export default AddEntryModal;
