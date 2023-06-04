import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./productDetailsDialog.css";

const ProductDetailDialog = ({ product }) => {
  const dispatch = useDispatch();
  const { id, cover, name, price, desc, images } = product;
  const [image, setImage] = useState(cover);

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };

  const handleDisplayingImages = (src) => {
    setImage(src);
  };

  useEffect(() => {
    console.log("Hi");
  }, [image]);

  console.log(images);

  return (
    <div>
      <h2 className="">{name}</h2>
      <div className="product_details">
        <img src={image} alt={product.name} />
        <div>
        <p>{desc}</p>
        <p>{price}€</p>
        </div>
      </div>

      <div className="small_images_container">
        {images &&
          images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={image}
                className="images"
                onClick={() => handleDisplayingImages(image)}
              />
            </div>
          ))}
      </div>

      <button onClick={handleAddToCart}>
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};

export default ProductDetailDialog;
