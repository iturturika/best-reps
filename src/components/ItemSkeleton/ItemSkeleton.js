import React from "react"
import ContentLoader from "react-content-loader"

const ItemSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={400}
    viewBox="0 0 350 400"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb"
    uniqueKey="products"
    {...props}
  >
    <rect x="10" y="10" rx="0" ry="0" width="340" height="300" /> 
    <rect x="10" y="315" rx="0" ry="0" width="340" height="20" /> 
    <rect x="10" y="340" rx="0" ry="0" width="340" height="20" /> 
    <rect x="300" y="365" rx="0" ry="0" width="100" height="30" />
  </ContentLoader>
)

export default ItemSkeleton

