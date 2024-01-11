import { useState } from "react";
import { useMutation } from "@apollo/client";

import { EDIT_AUTHOR, ALL_AUTHORS } from "../queries";

const SetBirthday = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");

  const [changeAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  const submit = async (event) => {
    event.preventDefault();

    console.log("add book...");
    console.log(name, born);
    changeAuthor({ variables: { name, born } });

    setName("");
    setBorn("");
  };

  return (
    <>
      <h2>change bornyear</h2>
      <form onSubmit={submit}>
        <div>
          name
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          born
          <input
            type="text"
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>

        <button type="submit">update author</button>
      </form>
    </>
  );
};

export default SetBirthday;
