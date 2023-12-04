import React, { useEffect, useState } from "react";
import "./PhotoGallery.scss";
import Banner from "../../components/Banner/Banner";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

// const images = [
//   {
//     id: 1,
//     title: "Some image title",
//     category: "category1",
//     image:
//       "https://images.unsplash.com/photo-1649102293221-6832d71ebd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//   },
//   {
//     id: 2,
//     title: "Some image title",
//     category: "category1",
//     image:
//       "https://images.unsplash.com/photo-1680593180878-e0cd1e99486e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//   },
//   {
//     id: 3,
//     title: "Some image title",
//     category: "category2",
//     image:
//       "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
//   },
//   {
//     id: 4,
//     title: "Some image title",
//     category: "category3",
//     image:
//       "https://images.unsplash.com/photo-1679260584506-cd991206e92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: 5,
//     title: "Some image title",
//     category: "category2",
//     image:
//       "https://images.unsplash.com/photo-1680593180878-e0cd1e99486e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//   },
//   {
//     id: 6,
//     title: "Some image title",
//     category: "category4",
//     image:
//       "https://images.unsplash.com/photo-1679260584506-cd991206e92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: 7,
//     title: "Some image title",
//     category: "category4",
//     image:
//       "https://images.unsplash.com/photo-1679260584506-cd991206e92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: 8,
//     title: "Some image title",
//     category: "category3",
//     image:
//       "https://images.unsplash.com/photo-1679260584506-cd991206e92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//   },
//   // add more images here
// ];

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    const getGalleryImages = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("galleryimages", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setGalleryImages(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getGalleryImages();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleCloseViaImage = (e) => {
    e.stopPropagation();
    handleCloseModal();
  };

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <>
      <Banner title="Our Gallery" subTitle="8 reasons to love our school." />
      <div className="gallery">
        <div className="gallery-buttons">
          <button onClick={() => handleCategoryClick("All")}>All</button>
          <button onClick={() => handleCategoryClick("academics")}>
            Academics
          </button>
          <button onClick={() => handleCategoryClick("events")}>Events</button>
          <button onClick={() => handleCategoryClick("facilities")}>
            Facilities
          </button>
        </div>
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
          <div className="gallery-images">
            {filteredImages.map((image) => (
              <img
                // data-aos="fade-up"
                // data-aos-duration="1000"
                key={image?._id}
                src={image?.img}
                alt={image?.category}
                className="gallery-image"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        )}
        {selectedImage && (
          <div className="gallery-modal" onClick={handleCloseModal}>
            <img
              src={selectedImage?.img}
              alt={selectedImage?.category}
              className="gallery-modal-image"
              onClick={handleCloseViaImage}
            />
            <span>{selectedImage.title}</span>
          </div>
        )}
      </div>
      {/* {isLoading ? (
        <div className="loading__inline">Loading...</div>
      ) : (
        
      )} */}
    </>
  );
};

export default Gallery;
