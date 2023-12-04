import React from 'react';
import "./Banner.scss";

const Banner = ({title, subTitle}) => {
  return (
    <div className='banner'>
        <div className="title">{title}</div>
        <div className="subtitle">{subTitle}</div>
    </div>
  )
}

export default Banner;