import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Emojilicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😀" }]);
  const addEmoji = () => {
    // Use the spread syntax to make a copy of the array
    setEmojis((prev) => [...prev, { id: uuid(), emoji: "😀" }]);
  };
  const deleteEmoji = (id) => {
    setEmojis((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  };
  
  return (
    <div>
      {/* // For delete call in the function so it is not immediately executed on component render  */}
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}

// It's kind of dumb using the uuid. It's an intersting hack but usually this comes from the database.
