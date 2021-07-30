import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [IsPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>ADD A NEW BLOG</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog Author</label>
        <select
          // placeholder="choose yor athor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option disabled></option>
          <option>Rahim Khan</option>
          <option>Hamza Ali</option>
          <option>Mehmood</option>
          <option>Saqlain</option>
          <option>Hamzah Ejaz</option>
        </select>
        {!IsPending && <button>ADD BLOG</button>}
        {IsPending && <button disabled>ADDING BLOG....</button>}
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Create;
