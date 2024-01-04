import DetailedImage from "@/components/DetailedImage/DetailedImage"

const page = ({params}) => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_BE_URL + `/items/${params.id}`);
        setImages(res.data.images);
      } catch (err) {
        return err;
      }
    }

    getItem();
  })
  return (
    <DetailedImage backURL={'/favourites'} images={images}/>
  )
}

export default page
