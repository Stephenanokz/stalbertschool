import React, { useEffect, useState } from "react";
import "./BlogInfo.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import { ThreeDots } from "react-loader-spinner";

const BlogInfo = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  const truncateString = (string = "", maxLength = 50) =>
    string.length > maxLength ? `${string.substring(0, maxLength)} …` : string;

  return (
    <div className="BlogInfo">
      <Banner
        title="Our Blog"
        subTitle="Stay updated on news, events and school activities"
      />

      <div className="blogContainer">
        {isLoading ? (
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
          currentPosts.map((post) => (
            <div key={post._id} className="blogItem">
              <img src={post?.imgs[0]} alt={post.title} />
              <span className="title">{truncateString(post?.title, 30)}</span>
              <span className="body">{truncateString(post?.body, 200)}</span>
              <div className="utils">
                <span className="left">
                  {post.createdAt.slice(0, 10)} | 3 min read
                </span>
                {/* <div className="right">
                <ThumbUpOutlinedIcon className="icon" />
                <ChatBubbleOutlineOutlinedIcon className="icon" />
                <ShareOutlinedIcon className="icon" />
              </div> */}
              </div>
              <Link to={`/blog/${post._id}`}>
                <button>
                  Read
                  <ArrowCircleRightIcon className="icon" />
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
      <Pagination
        totalItems={posts.length}
        itemsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BlogInfo;
