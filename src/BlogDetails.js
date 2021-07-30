import { useHistory, useParams } from "react-router";

import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    IsPending,
    error,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs/" + id);
  console.log(id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="Blog-Detail">
      {IsPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h1>{blogs.title}</h1>
          <p>Written By {blogs.author}</p>
          <p>{blogs.body}</p>
          <button onClick={handleClick}>DELETE</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
