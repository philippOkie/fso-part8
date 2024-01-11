import AuthorForm from "./AuthorForm";

const Authors = (props) => {
  if (!props.show) {
    return null;
  }

  const authors = props.authors;
  console.log(authors);
  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              {a.born ? <td>{a.born}</td> : <td>unknown</td>}
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AuthorForm authors={props.authors} />
    </div>
  );
};

export default Authors;
