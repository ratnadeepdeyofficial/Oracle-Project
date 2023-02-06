import React from 'react'
import '../Shop.css'
import ImgAsset from "../../public";
function Search1(props) {
  return (
    <div className="Item">
    <img className="Image_6" src={ImgAsset.Shop_Image_6} />
    <div className="MiscTag">
      <img className="Background_1" src={ImgAsset.Shop_Background_1} />
    </div>
    <div className="Heart">
      <img className="Vector_8" src={ImgAsset.Shop_Vector_8} />
    </div>
    <span className="Price_2">{props.price}</span>
    <span className="Product">{props.title}</span>
    <span className="Seller">{props.description}</span>
    <div className="Ratings">
      <img className="Star6" src={ImgAsset.Shop_Star6} />
      <img className="Star7" src={ImgAsset.Shop_Star7} />
      <img className="Star8" src={ImgAsset.Shop_Star8} />
      <img className="Star9" src={ImgAsset.Shop_Star9} />
      <img className="Star10" src={ImgAsset.Shop_Star10} />
    </div>
  </div>
  )
}

export default Search1