import React, { useEffect, useState } from "react";
import "./Post.scss";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

const Post = () => {
  // const images = [
  //   {
  //     id: 1,
  //     image: "/img/a40jj-pvl86.avif",
  //     alt: "Slide 1",
  //   },
  //   {
  //     id: 2,
  //     image: "/img/a6hxf-u5ocg.avif",
  //     alt: "Slide 2",
  //   },
  //   {
  //     id: 3,
  //     image: "/img/avt18-9ab7x.avif",
  //     alt: "Slide 3",
  //   },
  // ];

  const params = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    const getPost = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`posts/find/${params.blogId}`, {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPost();
  }, []);

  return (
    <div className="post">
      <Banner title="News & Events" />
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
        <div className="postContainer">
          {post?.imgs?.length > 1 ? (
            <Slider images={post?.imgs} />
          ) : (
            post?.imgs && <img src={post?.imgs[0]} alt="" />
          )}
          <div className="heading">
            <h2>{post?.title}</h2>
            <div>
              <span>Posted on {post?.updatedAt?.slice(0, 10)}</span>
              <span>By {post?.author}</span>
            </div>
          </div>
          <div className="body">{post?.body}</div>
        </div>
      )}
    </div>
  );
};

export default Post;
