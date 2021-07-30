import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    IsPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // const [name, setName] = useState("hamza");

  // const handleDelete = (id) => {
  //   const newBlog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlog);
  //   console.log(id);
  // };
  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {IsPending && <div>loading....</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {/* <button onClick={() => setName("tull")}>CLICK ME</button> */}
      {/* <p>{name}</p> */}

      {/* <BlogList
        blogs={blogs.filter((blogs) => blogs.author === "saqlain")}
        title="Saqlain Blogs!"
      /> */}
    </div>
  );
};

export default Home;
