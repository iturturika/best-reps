'use client'
import React from "react";
import DetailedImage from "@/components/DetailedImage/DetailedImage"
import axios from "axios";


const page = ({params}) => {
  const [images, setImages] = React.useState([]);
  const [url, setUrl] = React.useState([]);

  React.useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_BE_URL + `/items/${params.id}`);
        setImages(res.data.images);
        setUrl(res.data.url);
      } catch (err) {
        return err;
      }
    }

    getItem();
  })
  return (
    <DetailedImage backURL={'/replicas'} images={images} url={url}/>
  )
}

export default page
