import { useState } from "react";

function UserNameForm() {
  const [userName, setUserName] = useState("tiff");
  const updateUserName = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={updateUserName}
        id="username"
      />
      
      <button>Submit</button>
    </div>
  );
}

export default UserNameForm;
