import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("posts", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPosts();
  }, []);

  const filteredPosts = posts.slice(0, 3);

  const truncateString = (string = "", maxLength = 50) =>
    string.length > maxLength ? `${string.substring(0, maxLength)} …` : string;

  return isLoading ? (
    <div className="loading__inline">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#564f82"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  ) : (
    <div className="blog" id="blog">
      <div className="top">
        <span data-aos="fade-up" data-aos-duration="1000" className="title">
          Our Blog
        </span>
        <span data-aos="fade-up" data-aos-duration="1000" className="subTitle">
          Stay updated on news, events and school activities
        </span>
      </div>
      <div className="bottom">
        <div className="blogContainer">
          {posts.length <= 0 ? (
            <h3>Nothing here. No news posted!</h3>
          ) : (
            filteredPosts?.map((post) => (
              <Link key={post?._id} to={`/blog/${post?._id}`}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="blogItem"
                >
                  <img src={post?.imgs[0]} alt="" />
                  <span className="title">
                    {truncateString(post?.title, 30)}
                  </span>
                  <span className="body">
                    {truncateString(post?.body, 100)}
                  </span>
                  <div className="utils">
                    <span className="left">
                      {post?.updatedAt?.slice(0, 10)} | 7 min read
                    </span>
                    {/* <div className="right">
                  <ThumbUpOutlinedIcon className="icon" />
                  <ChatBubbleOutlineOutlinedIcon className="icon" />
                  <ShareOutlinedIcon className="icon" />
                </div> */}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <Link to="/blog">
          <button>View all posts</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
