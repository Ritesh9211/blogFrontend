import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://blogbackend-79of.onrender.com/api/posts" + search);
      setPosts(res.data);
      setLoading(true)
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
      {
        loading ? (
        <Posts posts={posts} />

      )
      :(
        <div className="Loading">Loading Please Wait.......</div>
      )

      }
       <Sidebar />
      </div>
    </>
  );
}
