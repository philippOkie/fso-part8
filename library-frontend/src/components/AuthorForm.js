import { useState } from "react";
import { useMutation } from "@apollo/client";
import Select from "react-select";

import { EDIT_AUTHOR, ALL_AUTHORS } from "../queries";

const SetBirthday = (props) => {
  const [name, setName] = useState(null);
  const [born, setBorn] = useState("");

  const options = props.authors.map((author) => ({
    value: author.name,
    label: author.name,
  }));

  console.log(options);

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
          <Select
            options={options}
            defaultValue={name}
            onChange={(selectedOption) => setName(selectedOption.value)}
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
